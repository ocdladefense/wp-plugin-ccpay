var postUrl = '/ccapp/addNewCardToProfileList/';
var cc_FormUrl = "/ccapp/public/cc_form";


function init()
{
var newCard = document.getElementById("newCard");
//newCard.addEventListener("click", addNewCard, true);
}

function paymentModalClick()
{
  var payButton= document.getElementById("purchase");
  payButton.addEventListener("click", doPaymentModal, true);
}

document.addEventListener("DOMContentLoaded", paymentModalClick, true);

function doPaymentModal(e)
{
  
  var target = e.target;
  var contactId= target.dataset.contactId;
  var pricebookEntryId= target.dataset.pricebookEntryId;


  var contactElement = document.createElement("input");
  contactElement.setAttribute("name","contactId");
  contactElement.setAttribute("type","hidden");
  contactElement.setAttribute("value",contactId);

  var priceBookEntryElement = document.createElement("input");
  priceBookEntryElement.setAttribute("name","priceBookEntryId");
  priceBookEntryElement.setAttribute("type","hidden");
  priceBookEntryElement.setAttribute("value",pricebookEntryId);

  window.theModal = new modal();

  theModal.attachModal();
  
  theModal.fetchHtml(cc_FormUrl).then(function(html){
    theModal.content(html);
    init();   
    renderCards();
    var addCardForm =document.getElementById("addCardForm");
    addCardForm.appendChild(contactElement);
    addCardForm.appendChild(priceBookEntryElement);
    theModal.showModal(); 
    doBootstrapValidation();
  });

}