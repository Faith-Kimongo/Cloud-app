export const config = {
  "dev": {
    "username": "udagramdb1",
    "password": "udagramdb1",
    "database": "udagramdb1",
    "host": "database-1.cowofq7jpram.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    
    "aws":{
      "aws_region": "",
      "aws_profile": "",
      "aws_media_bucket": ""
    }
  
  },
  "jwt": {
    "secret": "Hello world"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagramdb1",
    "host": "",
    "dialect": "postgres"
  }
}
