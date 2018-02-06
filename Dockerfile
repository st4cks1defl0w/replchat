FROM openjdk:8-stretch

MAINTAINER Ivan Volkov <1@stacksideflow.host>

ADD target/uberjar/spachat.jar /spachat/app.jar

EXPOSE 3000
EXPOSE 5557

RUN apt-get update \
  && apt-get install -y mysql-server

CMD mysql -u root -e "CREATE DATABASE chatsdb"
CMD mysql -u root -e "CREATE USER 'chat'@'localhost' IDENTIFIED BY '3anoa0nony6monymo';"
CMD mysql -u root -e "GRANT ALL PRIVILEGES ON * . * TO 'chat'@'localhost';"
CMD export databaseurl="mysql://localhost:3306/chatsdb?user=chat&password=3anoa0nony6monymo&serverTimezone=UTC"
CMD export NREPL_PORT=5557
CMD ["java", "-jar", "/spachat/app.jar"]
