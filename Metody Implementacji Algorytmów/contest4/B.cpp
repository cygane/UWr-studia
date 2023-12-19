#include <iostream>
using namespace std;

int main() {
    int n,m,l,t,ktory,ile,czas;
    cin>>n>>m>>l;
    int wlosy[n];
    for(int i = 0 ;i < n;i++){
        cin>>wlosy[i];
    }
    int grupy = wlosy[0] > l;
    for(int i = 1; i < n;i++){
        if(wlosy[i-1] <= l && wlosy[i] > l){
            grupy++;
        }
    }
    for(int i = 0; i < m;i++){
        cin>>t;
        if (t == 0){
            cout<<grupy<<endl;
        }
        else{
            cin>>ktory>>ile;
            if(wlosy[--ktory] > l){
                continue;
            }
            wlosy[ktory] += ile;
            if(wlosy[ktory] > l){
                bool left = ktory > 0 && wlosy[ktory - 1] > l;
                bool right = ktory < n - 1 && wlosy[ktory + 1] > l;
                if(!left && !right)
                {
                    grupy++;
                }
                if(left && right)
                {
                    grupy--;
                }
            }
        }
    }
}
