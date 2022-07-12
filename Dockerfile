FROM node:14.15
EXPOSE 4200

RUN apt-get update
RUN apt-get install -y vim  --no-install-recommends 

RUN  npm install -g @angular/cli

RUN git config --global user.email "vpeddi3@gmu.edu"
RUN git config --global user.name "Vamsi Krishna Peddi"

CMD /bin/bash


