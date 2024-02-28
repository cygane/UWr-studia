#include <iostream>
using namespace std;

int main(){
    int a,b,rest, first;
    cin>>a>>b;
    rest = a % 2024;
    first = (a / 2024) * 2024;
    if( rest != 0){
        first += 2024;
    }

    for(int i = first; i <=b; i+=2024){
        cout<<i<<" ";
    }

    return 0;
}
