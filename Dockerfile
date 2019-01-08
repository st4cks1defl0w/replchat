FROM openjdk:8-stretch

MAINTAINER Ivan Volkov <1@stacksideflow.host>

ADD target/uberjar/replchat.jar /replchat/app.jar

EXPOSE 3000
EXPOSE 5557

CMD mysql -u root -e "CREATE DATABASE chatsdb" --protocol=tcp -h localhost -P 3306
# CMD mysql -u root -e "CREATE USER 'chat'@'localhost' IDENTIFIED BY '3anoa0nony6monymo';" --protocol=tcp
# CMD mysql -u root -e "GRANT ALL PRIVILEGES ON * . * TO 'chat'@'localhost';" --protocol=tcp
# CMD export databaseurl="mysql://127.0.0.1:3306/chatsdb?user=chat&password=3anoa0nony6monymo&serverTimezone=UTC" --protocol=tcp
# CMD export NREPL_PORT=5557
# # CMD /etc/init.d/mysql start
# CMD mysql -u root -e "show databases"  --protocol=tcp -h 127.0.0.1 -P 3306
# CMD ["java", "-jar", "/replchat/app.jar"]
