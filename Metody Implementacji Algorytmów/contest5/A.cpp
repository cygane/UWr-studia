#include <iostream>
#include <algorithm>
using namespace std;
 
int main() {
    int n,m,ile;
    cin>>n>>m;
    int a[n];
    int b[m];
    for(int i = 0 ; i < n;i++){
        cin>>a[i];
    }
    sort(a,a+n);
    for(int i = 0 ; i < m;i++){
        cin>>b[i];
    }
 
    for(int i = 0; i < m;i++){
        cout<<upper_bound(a,a+n,b[i])-a<<" ";
    }
 
}
