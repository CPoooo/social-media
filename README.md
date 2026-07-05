# Social Media

no ai just brain (antipatterns or die, docs only)

/api/auth/login
/api/auth/register
/api/auth/signout

/api/feed/:userid (global feed and people you follow, homepage)

POST api/follow/:userid (follow this user)
POST /api/unfollow/:userid (unfollow this user)

POST /api/profile (update profile picture) TODO: does this api route make sense
POST /api/post/:userid (make a post)

Posts should go to all followers (how to fan out)

SQL Tables:
users table
posts table
follows table
comments table
likes table (or is this just on posts? well who cares this is my brain only)

users {
id: pk
img: jpg, png
bio: string 100 chars?
posts: string 250 chars (multiple posts per user)
createdat: date
updatedat: date
location: location
gender: male, female, care not to say
}

posts {
id: pk
createdat: date
userthatposted: userid (fk)
post_text: string 250 chars
comments (many comments one post)
likes: fk (how to determine the 'who likes this' feature , aka associate user with likes, i think count(likes) where it matches the postid)
}

likes {
post: userid (who posted the og content that is being liked here)
userid: id (guy that likes this content)
}

comments {
id: pk
createdat: date
userThatPostedThisComment: userid (fk)
post_text: string 250 chars
commentOnThisComment: commentid
}

follows {
id: pk
follower: userid (this guy follows the followee, i hate that word omg, but followee is the dude being FOLLOWED)
followee: userid
}
