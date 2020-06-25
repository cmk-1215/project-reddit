//second submission: fixed Git issues, now includes commits. 
//Added more intent driven comments. 
//Added Bootstrap grid layout



// a function that controls the main post button

var addPost = $('#post-btn').on('click', function () {
  var mainPost = $('#post-input').val();//the post input 
  var mainName = $('#name-input').val();//the name associated with post input 

  var commentButton = '<span class="special-word comment-button">comments </span> ';//comment button assicuated with each post
  var deleteButton = '<span class="special-word remove-button">remove </span>';//delete button associated with each post 


  //the following assigns variables to the input, name, and post button that will be included in the
  //comments section of each post. 
  var commentInput = '<input type="text" class="comment-input" placeholder="Comment"</input>';
  var commentName = '<input type="text" class="comment-name" placeholder="Name"</input>';
  var commentPost = '<button type="button" class="comment-post">Post</button>';

  //These all get combined in the variable "commentForm"
  var commentForm = commentInput + commentName + commentPost + '<p class="comments-here"></p>';

  // if the post and name fields are filled, add the post, poster's name, and the delete/comment buttons to the forum
    if (mainPost !== "" && mainName !== "") {
      $('.post-item').append('<div class="parent">' +deleteButton +
      commentButton + mainPost + '<p> '+commentForm+' </p><p>Posted by:<strong> ' +mainName+ '</strong></p</div>');
    } else {
      //if the post and name input are empty, alert the user
      alert('Please input your name and post content.');
    };


  //removes the post from the forum
  var removePost = $('.remove-button').on('click', function () {
    $(this).parent().remove();
    return removePost; 
  });

  //toggles the comments section when clicked
  var comments = $('.comment-button').unbind().on('click', function () {
    $(this).next().toggle();
    return comments;
  });


  // posts comment and user associated with comment to the post when "post comment is clicked"
  var postComment =$('.comment-post').on('click', function () {
    var postedComment = $('.comment-input').val();
    var postedCommentName = $('.comment-name').val();
    var closeButton = '<span class="glyphicon glyphicon-remove" style="color:#337ab7"></span>'

    if (postedComment !== "" && postedCommentName !== "") {
      $(this).parent().append('<p class="posted-content">'+postedComment + ' | Posted By: <strong>'
      + postedCommentName +'</strong>' +  closeButton +'</p>');
    } else {
      alert('Please fill out comment and name forms before posting.')
    };



    //removes comments posted to main post
    var removeComment = $('.glyphicon-remove').on('click', function () {
      $(this).parent().remove();
      return removeComment;
      });

      return postComment;
    });
    
    return addPost;
  });

