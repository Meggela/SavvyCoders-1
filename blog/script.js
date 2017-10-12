/* globals $, _ */

var host =
var postRequest = $.ajax( "https://jsonplaceholder.typicode.com/posts" );
var $posts = $( "#posts" );

function templatePost( post ){
    // return "<h3>" + post.title + "</h3>";
    return `
    <div class="post">
        <h3>${post.title}</h3>;
        <h4>Written by: ${post.userId}</h4>
        <p>${post.body}</p>
    </div>
    `;
}

function appendPosts( posts ){
    var firstFive = _.take( posts, 5 );
    var requests = firstFive.reduce( getAuthor, {} );
    var markup = firstFive.reduce( templatePost, "" );

    var requestPromises = Object.values( requests );

        .reduce(
            ( output, post ) => output + templatePost( post ),
            ""
        );

    $posts.append( markup );

    Promise
        .all( requestPromises )
        .then( injectAuthors );
}

postRequest.then( appendPosts );
