/**
 * Assume I've written the explanation of this class here. Umm for example...
 * This class pops a notification near your mouse cursor. 
 * Ye can set its image, ye can set its text, both, one by one, two to one, tag tournament
 * Ye can also customize NotificationTypes for your project needs.
 */
function CursorNotifier(){
  this.open = false;
  this.notificationDiv = document.createElement("div");
  this.notificationDiv.classList.add("notificationDiv");
  this.notificationDiv.style.cssFloat = "left";
  this.notificationDiv.style.position = "fixed";
  this.notificationDiv.style.display = "none";
  this.notificationImage = document.createElement("img");
  this.notificationImage.classList.add("notificationImage");
  this.notificationText = document.createElement("div");
  this.notificationText.classList.add("notificationText");
  this.notificationDiv.appendChild(this.notificationImage);
  this.notificationDiv.appendChild(this.notificationText);
  document.body.appendChild(this.notificationDiv);
  var self = this;
  document.body.onmousemove = function(e){
    updateNotificationCoordinates(e,self.notificationDiv)
  }
}

/**
 * Types of notification. Will grow if used.
 */
CursorNotifier.NotificationTypes = {
  Progressing:{
    imageUrl: "./media/image/sleeping.png",
    text:""
  },
  Custom:{
    imageUrl: "./media/image/sleeping.png",
    text:""
  }
}

/**
 * Give the notification type, override it with imageUrl, text or both. 
 * If you give "" as imageUrl then the image won't be shown. 
 * Same goes for text.
 */
CursorNotifier.prototype.notify = function(notificationType,imageUrl,text){
  if(imageUrl = "") {
    this.notificationImage.style.display = "none";  
  } else {
    this.notificationImage.display = "block";
  }

  this.notificationDiv.style.display = "block";
  notificationType.imageUrl = imageUrl || notificationType.imageUrl;
  notificationType.text = text || notificationType.text;
  this.notificationImage.src = notificationType.imageUrl;

  this.notificationText.innerHTML = notificationType.text;
  this.notificationDiv.style.display = "block";
}

/**
 * Set image url or text or both for notification.
 * For manual usage show/hide for yerself.
 */
CursorNotifier.prototype.set = function(imageUrl,text){
  if(imageUrl = "") {
    this.notificationImage.style.display = "none";  
  }

  this.notificationImage.src = notificationType.imageUrl;
  this.notificationText.innerHTML = notificationType.text;
}

/**
 * Show notification.
 */
CursorNotifier.prototype.show = function(){
  this.notificationDiv.style.display = "block";
}

/**
 * Hide notification.
 */
CursorNotifier.prototype.hide = function(){
  this.notificationDiv.style.display = "none";
}

/**
 * Follow mouse cursor forever.
 * @param {*} e Event comes from mouse move
 */
function updateNotificationCoordinates(mouseEvent, notificationDiv){
  //got this code from: https://nerdparadise.com/programming/javascriptmouseposition
  var xpos;
  var ypos;
  if (mouseEvent)
  {
    //FireFox
    xpos = mouseEvent.clientX;
    ypos = mouseEvent.clientY;
  }
  else
  {
    //IE
    xpos = window.event.screenX;
    ypos = window.event.screenY;
  }

  notificationDiv.style.left = (xpos +24)+ "px";
  notificationDiv.style.top = (ypos -24)+ "px";
}