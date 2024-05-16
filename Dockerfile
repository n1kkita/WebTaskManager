FROM openjdk:17-alpine
MAINTAINER Nikita Koval
COPY server/target/server-0.0.1-SNAPSHOT.jar web-tk-manager.jar
ENTRYPOINT ["java","-jar","task-manager.jar"]