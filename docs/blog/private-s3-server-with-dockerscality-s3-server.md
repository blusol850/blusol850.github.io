# Private S3 Server with Docker+Scality S3 Server

```
docker run -d \
--name mys3server \
-p 8000:8000 \
-e SCALITY_ACCESS_KEY_ID=myAccessKey \
-e SCALITY_SECRET_ACCESS_KEY=mySuperSecretKey123 \
-v s3data:/usr/src/app/localData \
-v s3metaData:/usr/src/app/localMetadata \
scality/s3server
```


Connection Options: [https://github.com/scality/S3/blob/master/README.md#command-line-tools](https://github.com/scality/S3/blob/master/README.md#command-line-tools)

I prefer the s3cmd.

Once you configured `~/.s3cfg` you here's some commands you can run.


```
#This will create the bucket webfiles
s3cmd mb s3://webfiles

#This will upload a test.txt file from the mac desktop to the  webfiles bucket.
s3cmd put ~/Desktop/test.txt  s3://webfiles

#This will List All objects (buckets, files inside buckets)
s3cmd la

#This will list all files in the webfiles bucket.
s3cmd ls s3://webfiles
```
