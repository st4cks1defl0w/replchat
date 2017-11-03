<h1>Simple SPA chat with Re-frame+MaterialUI frontend, Ring, Aleph+MySQL backend</h1>
<p>(interview project)</p>
<p>One instance running at https://spachat.stacksideflow.host</p>

<h2>Core stack</h2>
<ul>
<li>Re-frame + Reagent</li>
<li>Aleph</li>
<li>MaterialUI</li>
<li>MySQL</li>
<li>Luminus template</li>
<li>Leiningen</li>
</ul>
<h2>Development plugins used</h2>
<ul>
<li>Figwheel</li>
<li>Re-frame 10x</li>
</ul>
<h2>Features/design</h2>
<ul>
<li>Simple merged sign in/sign up, passwords saved/compared in md5, basic cookie is issued for submitting chats and udping user online status to the server</li>
<li>Basic chat functionality</li>
<li>Cljc pass speccing for ClojureScript and Clojure based on common spec def</li>
<li>Core cljs functions(components) are found in <code>/src/cljs/spachat/core.cljs:</code> reagent templates, init + routing and what not</li>
<li>Re-frame dispatchers and subscribers are found in <code>events.cljs</code> and <code>subs.cljs:</code> ajax requests to the backend are divided into [ajax request dispatcher-ajax OK response dispatcher-ajax error handler response dispatcher]</li>
<li>Backend listens on 4 <code>API/</code> endpoints, defined in /src/clj/spachat/routes/home.clj</li>
<li>10s interval pinging for new messages and submitting last_seen stamp to the server for authorised user</li>
</ul>
<h2>Start app - development</h2>
<p>Tested with Debian, OpenJDK8 (Leiningen 2.8.1 on Java 1.8.0_181 OpenJDK 64-Bit Server VM)</p>
<p>System dependencies: mysql-server, leiningen</p>
<p>To launch the app, go to project root then (assuming Emacs+CIDER setup)</p>
<ul>
<li>1. Supply a db link as env var <code>(export databaseurl="mysql://localhost:3306/XXXXX?user=XXXXX&password=XXXXX")</code> or uncomment and edit this var in /dev-config.edn</li>
<li>1.1 Run migrations - see below</li>
<li>2.* 1st terminal: <code>lein run</code> will start the backend server on :3000</li>
<li>3. 2nd terminal:  <code>lein repl</code></li>
<li>4. Emacs: cider-connect (<code>, s c</code>) to connect to the nrepl instance</li>
<li>5. Emacs: <code>(fw-repl!)</code> in your clj-repl buffer to compile js and convert buffer to cljs-repl</li>
<li>(optional 6.) *Emacs: <code>cider-connect-sibiling-clj</code> to connect a second repl and (start) to launch the backend</li>
</ul>
<h2>Start app - uberjar</h2>
<p>Tested with Debian, OpenJDK8 (Leiningen 2.8.1 on Java 1.8.0_181 OpenJDK 64-Bit Server VM)</p>
<p>System dependencies: mysql-server, leiningen</p>
<p>To launch the app, go to project root then </p>
<ul>
<li>1. <code>lein uberjar</code></li>
<li>2. Go to /target/uberjar/spachat.jar to find your uberjar</li>
<li>3. Supply a db link as env var in your shell - <code>databaseurl="mysql://localhost:3306/XXXXX?user=XXXXX&password=XXXXX"</code></li>
<li>3.1 Run migrations - see below</li>
<li>4. Start uberjar with <code>java -jar spachat.jar</code> </li>
</ul>

In both cases the app will be launched at http://127.0.0.1:3000/



<b>mySQL database structure for migrations</b> (exec these queries to your db when migrating, no migration function is implemented atm):


CREATE TABLE chats (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
text TEXT,
author TEXT,
stamp TIMESTAMP);


CREATE TABLE people (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
username TEXT,
password TEXT,
cookie TEXT,
lastseen TIMESTAMP,
signupdate DATE);
