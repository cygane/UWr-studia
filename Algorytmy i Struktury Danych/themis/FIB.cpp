#include <iostream>
using namespace std;

void mult(long long a[3][3], long long b[3][3])
{
    long long mul[3][3];
    for (int i = 0; i < 3; i++){
        for (int j = 0; j < 3; j++){
            mul[i][j] = 0;
            for (int k = 0; k < 3; k++){
                mul[i][j] += a[i][k]*b[k][j];
            }
        }
    }
 
    for (int i=0; i<3; i++){
        for (int j=0; j<3; j++){
            a[i][j] = mul[i][j];  
        }
    }
}

long long pow(long long Fib[3][3], long long n)
{
    long long M[3][3] = {{1,1,0}, {1,0,0}, {0,1,0}};
 
    if (n==1){
        return Fib[0][0] + Fib[0][1];
    }
    pow(Fib, n/2);
 
    mult(Fib, Fib);
 
    if (n%2 != 0){
        mult(Fib, M);
    }

    return Fib[0][0] + Fib[0][1] ;
}

long long fib(long long n){
    long long F[3][3] = {{1,1,0}, {1,0,0}, {0,1,0}} ;
 
    if(n==0){
        return 0;
    }
    if(n==1 || n==2){
        return 1;
    }
 
    return pow(F, n-2);
}

int main(){
    long long t,n,m;
    cin>>t;
    for(int i=0; i<t; i++){
        cin>>n>>m;
        cout<<fib(n) % m<<"\n";
    }
}