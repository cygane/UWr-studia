#include <iostream>
#include <cmath>
using namespace std;
#define LIMIT 1000000
 
 
long long i, j;
long long pierwsze[LIMIT];
void sito(){
    pierwsze[0] = pierwsze[1] = 1;
    for(i=2;i<LIMIT;i++){
        if (pierwsze[i]==0){
            for(j=i*i;j<LIMIT;j+=i){
                pierwsze[j] = 1;
            }
        }
    }
}
int kwadrat(long long n){
    double sqrt_n = sqrt(n);
    if(sqrt_n == int(sqrt_n)){
        return 1;
    }
    else{
        return 0;
    }
}
 
int main(){
    sito();
    long long n, x;
    cin>>n;
    for(i=0;i<n;i++){
        cin>>x;
        if (x==4){
            cout<<"YES"<<endl;
        }
        else if (x%2==0){
            cout<<"NO"<<endl;
        }
        else if(kwadrat(x)==1 && pierwsze[int(sqrt(x))]==0){
            cout<<"YES"<<endl;
        }
        else{
            cout<<"NO"<<endl;
        }
    }
}