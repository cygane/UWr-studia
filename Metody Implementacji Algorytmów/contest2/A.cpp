#include <iostream>
using namespace std;

int main() {
   int n, a, b;
   string r;
   cin>>n>>a>>b;
   cin>>r;
   int wolne = n;
   int usadzeni = 0;
   for(int i = 0; i< r.length();i++){
       if(r[i] == '*') {
           wolne--;
       }
   }

       int k;
       char ostatni;
       if(a>b) {
           for (int i = 0; i < r.length(); i++) {
               if (r[i] == '.') {
                   if (ostatni == 'b') {
                       if (a > 0) {
                           usadzeni++;
                           a--;
                           ostatni = 'a';
                       }
                       else{
                           ostatni = '.';
                       }
                   } else if (ostatni == 'a'){
                       if (b > 0) {
                           usadzeni++;
                           b--;
                           ostatni = 'b';
                       }
                       else{
                           ostatni = '.';
                       }
                   }
                   else{
                       if(a > b){
                           usadzeni++;
                           a--;
                           ostatni = 'a';
                       }
                       else if(b > 0){
                           usadzeni++;
                           b--;
                           ostatni = 'b';
                       }
                   }
               }
               else{
                   ostatni = '.';
               }
           }
       }
       else{
           for (int i = 0; i < r.length(); i++) {
               if (r[i] == '.') {
                   if (ostatni == 'a') {
                       if (b > 0) {
                           usadzeni++;
                           b--;
                           ostatni = 'b';
                       }
                       else{
                           ostatni = '.';
                       }
                   } else if(ostatni == 'b'){
                       if (a > 0) {
                           usadzeni++;
                           a--;
                           ostatni = 'a';
                       }
                       else{
                           ostatni = '.';
                       }
                   }
                   else{
                       if(a > b){
                           usadzeni++;
                           a--;
                           ostatni = 'a';
                       }
                       else if(b > 0){
                           usadzeni++;
                           b--;
                           ostatni = 'b';
                       }
                   }
               }
               else{
                   ostatni = '.';
               }
           }
       }

    cout<<usadzeni;
    cout<<"Hello World";

}

//10 6 1 ....*...*.
//powinno byc 6 bo aba.*a.a*a
//u cb nie dziala bo na 4 miejscu nie stawiasz nic a skonczyly ci sie b wiec ostatni bedzie ciagle a wiec nie wstawiasz go juz nigdzie