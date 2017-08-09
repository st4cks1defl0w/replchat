FROM java:8-alpine
MAINTAINER Your Name <you@example.com>

ADD target/uberjar/spachat.jar /spachat/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/spachat/app.jar"]
