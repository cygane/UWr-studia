#include <iostream>
using namespace std;

int tab[1000000];
int q[1000000];

int srch(int l,int r,int q){
    while(l < r){
        int half = (l+r)/2;
        if(tab[half] < q){
            l = half + 1;
        }
        else{
            r = half;
        }
    }
    return l;
}

int main(){
    int n,m,left,right;
    cin>>n;
    
    for(int i=0; i<n; i++){
        cin>>tab[i];
    }

    cin>>m;
    for(int i=0 ; i<m; i++){
        cin>>q[i];
        if(tab[n-1] < q[i]){
            cout<<0<<" ";
        }
        else{
            cout<<n - srch(0,n-1,q[i])<<" ";
        }
    }
}