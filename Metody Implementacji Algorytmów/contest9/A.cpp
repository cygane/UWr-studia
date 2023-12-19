#include <iostream>
using namespace std;

int main() {
   int n;
   cin>>n;
   int t[n];
   for(int i = 0; i < n;i++){
       cin>>t[i];
   }

   int czy = 0;
   for(int i = 0; i < n;i++){
       int pom = i;
       int ile = 0;
       while(ile < 4 ){
           pom = t[pom] - 1;
           ile++;
           if(ile == 3 && pom == i){
               czy = 1;
               cout<<"YES";
               break;
           }
           if(czy == 1){
               break;
           }
       }
   }
   if(czy == 0){
       cout<<"NO";
   }
}
