#include <iostream>
using namespace std;

void solve(){
    int n;
    cin>>n;
    int a[n];
    for(int i=0;i<n;i++)
        cin>>a[i];
    int ct=0,st=0;
    while(st<n-1 && a[st++]==1)
        ct++;
    if(ct%2==0) cout<<"First\n";
    else cout<<"Second\n";
}

int main() {
    int t;
    cin>>t;
    while(t--) solve();

    return 0;
}
