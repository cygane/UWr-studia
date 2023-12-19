#include <iostream>
using namespace std;
 
int main() {
    int n,suma,zero,parzysta,ile_zer;
    cin>>n;
    string s;
    for(int i = 0; i < n;i++){
        cin>>s;
        suma = 0;
        zero = 0;
        ile_zer = 0;
        parzysta = 0;
        for(int j = 0; j < s.size();j++){
            if(s[j] == '0'){
                zero = 1;
                ile_zer ++;
            }
            else if(((int)s[j] - '0') % 2 == 0){
                parzysta = 1;
            }
            suma += (int)s[j] - '0';
        }
        if( (suma % 3 == 0 && parzysta == 0 && zero == 1 && ile_zer > 1) || (suma % 3 == 0 && parzysta == 1 && zero == 1)){
            cout<<"red"<<endl;
        }
        else{
            cout<<"cyan"<<endl;
        }
    }
}