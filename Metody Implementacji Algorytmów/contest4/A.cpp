#include <iostream>
using namespace std;

int main() {
   int q,n;
   cin>>q;
   for(int i = 0; i < q;i++){
       cin>>n;
       int t[n];
       for(int j = 0 ; j < n;j++){
           cin>>t[j];
       }
       int res[n];
       for(int k = 0;k < n;k++){
           int dni = 0;
           int wroc = k;
           while(t[wroc] - 1 != k){
               dni++;
               wroc = t[wroc] - 1;
           }
           dni++;
           res[k] = dni;
       }
       for(int a = 0; a < n; a++){
           cout<<res[a]<<" ";
       }
       cout<<endl;
   }

}
