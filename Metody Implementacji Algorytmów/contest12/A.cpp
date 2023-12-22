#include <iostream>
#include <cmath>
using namespace std;

void solve(){
    int a,b,c;
    cin>>a>>b>>c;
    a+=ceil(c/2.0);
    b+=floor(c/2.0);
    if(a>b) cout<<"First\n";
    else cout<<"Second\n";
}

int main() {
    int t;
    cin>>t;
    while(t--) solve();

    return 0;
}
