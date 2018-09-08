# re-frame REPLchat
 Running at [replchat.stacksideflow.host](https://replchat.stacksideflow.host)

  *Restricted remote nREPL chat posting with [protected-eval](https://github.com/stacksideflow/protected-eval)*

## Post a message with an Emacs REPL:

- Connect to `https://replchat.stacksideflow.host` port `5557`
- While in clj REPL buffer: `(replchat.remote/post-message-with-repl  "Your message")`

Check out your message at [replchat.stacksideflow.host](https://replchat.stacksideflow.host)

## Quick rundown

- Simple merged sign in/sign up, passwords are hashed, basic cookie is issued for submitting chats and udp'ing user online status to the server
- MaterialUI-powered
- `.cljc` password speccing for ClojureScript and Clojure based on common `s/def`
- Backend built on Aleph + MySQL CRUD, migrations are run on each launch by default, wiping app state

## Start app (:development)

Launch an nREPL instance, in this case with Leiningen

`lein repl :headless`

After connecting to the nREPL (e.g. with Emacs+CIDER), launch the server with

`(start)`

After server startup, build cljs, launch Figwheel and convert to cljs REPL with

`(fw-repl!)`

## Start app (:development) +protected-eval

Note a non-headless (+cider) middleware in the `project.clj` `:protected-eval` profile,
necessary for rolling with `lein repl` instead of `lein repl :headless`, like the name implies.
See [protected-eval](https://github.com/stacksideflow/protected-eval) for full documentation.

`lein with-profile +protected-eval repl`

All the functions except for the `defnremote`d ones will now be firewalled on your nREPL server, so you'll have to launch the backend and compile cljs with your terminal REPL instead of a remote nREPL. Aside from this, startup steps are the same as in normal (:development) mode.

## Start app (:uberjar) +protected-eval

After compiling with `lein uberjar`, supply environment variables

`export databaseurl="mysql://localhost:3306/chatsdb?user=chat&password=3anoa0nony6monymo&serverTimezone=UTC"`

`export NREPL_PORT=5557`

Then (assuming you've lifted the jar file from build dir)

`java -jar replchat.jar`


The app will run on `localhost:3000`

A protected nREPL you can connect to and post messages to the chat will be listening on `localhost:5557`
