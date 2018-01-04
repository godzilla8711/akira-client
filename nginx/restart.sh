ps -eaf | grep nginx | grep worker | tr -s " " " " | cut -d " " -f3 | xargs sudo kill
sleep 0.5
sudo nginx -c ~/akira-client/nginx/nginx.conf 
sleep 0.5
sudo cp ~/akira-client/index.html /usr/share/nginx/html
echo Started process ID:
ps -eaf | grep nginx | grep worker | tr -s " " " " | cut -d " " -f3 | xargs echo
echo Finished
