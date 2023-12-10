"use strict";
function PlainBlog() {
  var ele = document.createElement("div");
  var content = `


<p>

12/8/23


alright. i feel like i sort of misunderstand of css styling works. but i think i undertand enough. im having trouble validating my inputs and im
not really sure how to do it. i did the delete button, easy. also the edit pop up is on the top of the page all the time. im not sure if thatd 
have me lose points. 



</p>



<p>
12/5/23

i  did not do my previous homework so kit was somewhat hard to do this one becouse i needed to do everyhing this homework required on top 
of needing to do valudation so it was somewhat diffucult

</p>





<p>

  hw5
I find this lab to be intially easier. i  found it easier to impolemt the code i did in the previous lab. and put it in here. my code didnt even work in the lab but it worked 
here. well for the most part. that being said i found an issue where i couldnt get anything to display. turns out i misspelled the name of the file. i put an  s at the end of image


I found my self spending most of the time trying to figure out how to implement two json files in to my react and how to implement a hide show in the js file.

i found how to hide and show  for js but then for some reason first element was in the second div instead of the firsts. i figured to cut my losses.
I JUST couldnt figure out how to impleent a second call in react. it kept breaking the site. 
  </p>









  <p>
  hw4
 it took a long time to understand the mistakes of previous lab.
  </p>
  
  



<p>
hw3
I didnt really undestand how to implement elements into my blog page like though javascript
</p>



  
    <p>
    lab2 
    for homework 2 implementing react was rather confusing. i understood the
    components but i found it hard to add them to my website without
    it breaking the site. so i decided to move my website to
    the sample code. but i still found it difficult to add
  a photo becouse the moemnt i added a photo it could break the site.
  and the styling on the new site made it difficult to see
  the ascii art i wanted to implement as my logo. i am very confused to see the big picture of how
  everything interacts with each other. also when i uploaded the website to the server my color sheet 
  wasnt apearing.  i spent 30 minutes try to figure out what was wrong. i learned i was missing a curly brace.
    
    
    
    </p>

    <p>
    bjj_moves_db
    <li>int id</li>                    
    <li>varchar 50  names,</li>
    <li>varchar 1000 move_image</li>
    <li>varchar 1000 description</li>
    <li>int difficulty</li>
    <li>boolean Gi</li>
    <li>int Position</li>
    <li>varchar 1000 video_link</li>
    <li> int rating</li>
    <li>int web_user_id</li>

  </p>

  <p>
    I bought a book about css and html when i was young. but i didnt do much
    with it. i made a website but that was about it. i also dabbled with the
    framework astro js over the summer. but for the most part i know
    absolutely nothing about web development.
  </p>

  
  <p>
lab1
 i found it hard to see some of the changes I did to my website such as media query and flex on a
 display. i implemented it, yet i still dont understand what it did or changed. but then again i was
 in a rush when i implemented this. 
  </p>


    `;
  ele.innerHTML = content;
  ele.classList.add("blog");
  return ele;
}
