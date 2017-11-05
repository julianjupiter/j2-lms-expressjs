$(document).ready(function(){
    // Books table
    $('#books-table').DataTable();
    let newBookButton = '<button type="button" id="new-book-button" class="btn btn-primary" data-toggle="modal" data-target="#book-modal" data-book-action="add">Add</button>';
    $(newBookButton).insertBefore('#books-table_wrapper #books-table_length label');

    // Books modal
    $("#book-modal").modal({
        keyboard: true,
        backdrop: "static",
        show: false,
    }).on("show.bs.modal", function(event){
        var button = $(event.relatedTarget);
        var bookId = button.data("book-id");
        let bookAction = button.data('book-action');

        switch(bookAction) {
            case 'add':
                addBook(this);
                break;

            case 'view':
                viewBook(this, bookId);
                break;
                
            case 'edit':
                editBook(this);
                break;
                
            case 'delete':
                deleteBook(this);
                break;
        }        
    }).on('hidden.bs.modal', (event) => {
        $(this).find('.modal-title').html('');
        $(this).find('.modal-body').html('');
        $(this).find('.modal-footer').html('');
    });
});

let modalTitle = $('.modal-title');
let modalBody = $('.modal-body');
let modalFooter = $('.modal-footer');
let closeModal = $('#close-modal:hidden').clone();
let submitModal = $('#submit-modal:hidden').clone();

function addBook(modal) {
    let content = $('#add-book-form:hidden').clone();

    $(modal).find(modalTitle).html('Add Book');
    $(modal).find(modalBody).html(content);
    $(modal).find('#add-book-form').css('display', 'block');
    $(modal).find(modalFooter).append(closeModal);
    $(modal).find('#close-modal').css('display', 'block');
    $(modal).find(modalFooter).append(submitModal);
    $(modal).find('#submit-modal').css('display', 'block');
}

function viewBook(modal, bookId) {
    let content = $('#view-book-modal-table:hidden').clone();

    $(modal).find(modalTitle).html('View Book');
    $(modal).find(modalBody).html(content);
    $(modal).find($('#view-book-modal-table')).css('display', 'block');

    fetch('/books/' + bookId)
        .then((response) => {
            response.json().then(result => {
                $(modal).find('#book-id').html(result.id);
                $(modal).find('#book-title').html(result.title);
                $(modal).find('#book-description').html(result.description);
                $(modal).find('#book-created-at').html(result.created_at);
            });
        });
    
    $(modal).find(modalFooter).append(closeModal);
    $(modal).find('#close-modal').css('display', 'block');
}

function editBook(modal) {
    $(modal).find(modalTitle).html('Edit Book');
    $(modal).find(modalFooter).append(closeModal);
    $(modal).find('#close-modal').css('display', 'block');
}

function deleteBook(modal) {
    $(modal).find(modalTitle).html('Delete Book');
    $(modal).find(modalFooter).append(closeModal);
    $(modal).find('#close-modal').css('display', 'block');
}