#include <iostream>
using namespace std;

int main(){
    int n,p,ind,mozna = 0;
    string s;
    cin>>n>>p;
    cin>>s;
    for(int i = n - 1; i >= 0; i--){
        int pozycja = s[i] - 'a' + 1;
        for(int j = pozycja ; j < p; j++){
            if( (i >= 1 && s[i - 1] - 'a' == j) ||  (i >= 2 && s[i - 2] - 'a' == j) ){
                continue;
            }
            s[i] = char(j + 'a');
            mozna = 1;
            ind = i + 1;
            break;
        }
        if(mozna == 1){
            break;
        }

    }

    if(mozna == 0)
    {
        cout<<"NO"<<endl;
        return 0;
    }

    for(int i = ind; i < n; i++){
        for(int j = 0 ; j < p; j++){
            if( (i >= 1 && s[i - 1] - 'a' == j) ||  (i >= 2 && s[i - 2] - 'a' == j) ){
                continue;
            }
            s[i] = char(j + 'a');
            break;
        }
    }
    for(int i = 0; i < n ;i++){
        cout<<s[i];
    }
    cout<<endl;
}
