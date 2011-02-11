function my_popup()
{
// check to see that the browser supports the getElementsByTagName method
// if not, exit the loop
//	if (!document.getElementsByTagName) {
//		return false;
//	}
// create an array of objects of each link in the document
 var i,popuplinks
 popuplinks = document.getElementsByTagName("a");
// loop through each of these links (anchor tags)
  for (i=0; i<popuplinks.length; i++)
  {
// if the link has a class of "popup"...
   if (popuplinks[i].getAttribute("class") == "popup")
   {
// add an onclick event on the fly to pass the href attribute
// of the link to our second function, openPopUp
  		popuplinks[i].onclick = function()
    { openPopUp(this.getAttribute("href"));
      return false;
			}
		}
	}
}

function highlightLink()
{
  var i, menu_tag, thisPage, my_obj;
  menu_tag = 'navigation';
//  menu_tag = 'bg_menu';
//Get filename from the URL
	thisPage = document.URL.substring(document.URL.lastIndexOf("/")+1, document.URL.length);
  my_obj   = document.getElementById(menu_tag).getElementsByTagName('a');
  for (i=0; i<my_obj.length; i++ )
	{
		//Get only the filename from the href of navigation link
		pageLink = my_obj[i].href.substring(my_obj[i].href.lastIndexOf("/")+1,
      my_obj[i].href.length);
		if (thisPage == pageLink)
		{
			my_obj[i].className = "current";
		}
	}
}

function change_big_one(thumb){
  document.getElementById('BigOne').src=thumb.src.replace("_thumb","");
  document.getElementById('BigOne').alt=thumb.alt;
}

function findimg()
{ 
  var i, my_obj;
  my_obj = document.getElementById("thumbs").getElementsByTagName('img');
  for (i=0; i<my_obj.length; i++)
  {
    my_obj[i].onmouseover = function() {change_big_one(this);}
  }
  //  var sels = document.getElementsByTagName("SELECT");
//for(var i = 0, maxI = sels.length; i < maxI; ++i) {
//  var sel = sels[i];
//  if(sel == slctFild)
//    continue;  // exclude the current select element
//  sel.selectedIndex = 0;
//}
}

//window.onload = function() {
//  highlightLink();
//  my_popup();
//  findimg();
//}

window.onload = function() {
  highlightLink();
  my_popup();
  thisPage = document.URL.substring(document.URL.lastIndexOf("/")+1, document.URL.length);
  if (thisPage == 'gallery_holly.php' || thisPage == 'gallery_jardine.php') {
    findimg();
  }
}
