#include <iostream>
#include <algorithm>
using namespace std;

int main() {
   int n,m,t,l,r;
   long long int suma =0;
   cin>>n;
   long long int tab[n];
   long long int tabs[n];
   long long int sum[n];
   long long int sums[n];
   for(int i=0; i<n;i++){
       cin>>tab[i];
       tabs[i] = tab[i];
       suma+=tab[i];
       sum[i] = suma;
   }
   sort(tabs, tabs+n);
   suma = 0;
   for(int i=0; i<n;i++){
        suma+=tabs[i];
        sums[i] = suma;
   }
   cin>>m;
   for(int i=0; i<m;i++){
       cin>>t>>l>>r;
       if(t == 1){
           if(l-1 == 0){
               cout<<sum[r-1]<<endl;
           }
           else{
               cout<<sum[r-1] - sum[l-2]<<endl;
           }
       }
       else{
           if(l-1 == 0){
               cout<<sums[r-1]<<endl;
           }
           else{
               cout<<sums[r-1] - sums[l-2]<<endl;
           }
       }
   }
}
