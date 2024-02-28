#include <iostream>
using namespace std;

void fac(int q){
    int k = 2;
    while(q > 1){
        while(q%k==0) {
            cout<<k<<" ";
            q/=k;
        }
        ++k;
    }
}

void sito(int max){
    for (int i=2; i*i<=max; i++) {
        if(!tab[i])				
		for (int j = i*i ; j<=max; j+=i) 
            tab[j] = 1;			
    }
}

int tab[1000000];
int tab2[1000000];
int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int t,max = 0;
    cin>>t;

    for(int i=0; i<t; i++){
        cin>>tab[i];
        if(tab[i] > max){
            max = tab[i];
        }
    }
    sito(tab2, max);
    for(int i=0; i<t; i++){
        fac(tab[i]);
        cout<<'/n';
    }
}