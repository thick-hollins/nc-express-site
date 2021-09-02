# NC-EXPRESS

## Routes

- / - homepage (all articles, newest first)
- /login - redirect to /
- /signup - redirect to /
- /articles - same as / (queries, trending, new comment box, pagination)
- /topics
- /topics/:topic_name (no queries)
- /articles/:article_id (attached comments, new comment, pagination)
- /users
- /write
- /users 
- /users/:username 
- /profile - change username, avatar, password

when appUser is set, get array of liked articles. Add to array when vote is incremented. Read array when home, articles or article is rendered.

Disable vote buttons

add junction table to database, copy article like functionality over to comments, add tests