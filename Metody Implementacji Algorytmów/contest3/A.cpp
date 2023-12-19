#include <iostream>
using namespace std;

int main() {
    int testy,n,m;
    cin>>testy;
    char vika[] = "vika";
    for(int i = 0 ; i < testy; i++){
        cin>>n>>m;
        char t[n][m];
        for(int c = 0 ;c < n;c++){
            for(int r = 0; r < m;r++){
                cin>> t[c][r];
            }
        }
        int licz = 0;
        for(int r1 = 0;r1 < m;r1++){
            for(int c1 = 0;c1 < n;c1++){
                if (t[c1][r1] == vika[licz]){
                    licz++;
                    break;
                }
            }
        }
        if(licz == 4){
            cout<<"YES"<<endl;
        }
        else{
            cout<<"NO"<<endl;
        }
    }
}
