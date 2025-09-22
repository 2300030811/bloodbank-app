# Use a lightweight Java 21 image as the base
FROM openjdk:21-jdk-slim

# Define an argument for the path to the JAR file
ARG JAR_FILE=target/*.jar

# Copy the JAR file from your computer into the container
COPY ${JAR_FILE} app.jar

# Tell Docker the command to run when the container starts
ENTRYPOINT ["java", "-jar", "/app.jar"]