#include <iostream>
using namespace std;

int main() {
    int ile, n, m;
    cin>>ile;
    int tab[ile];
    for (int i = 0 ; i<ile; i++){
        cin>>n>>m;
        int a[n][m];
        for(int j = 0;j<n;j++){
            for(int k = 0;k<m;k++){
                cin>>a[j][k];
            }
        }
        int aktualne = 0;
        int max = 0;
        int pomx = 0;
        int pomy = 0;
        for(int x = 0; x < n;x++){
            for(int y = 0; y < m ;y++){
                aktualne = 0;
                pomx = x;
                pomy = y;
                while( pomx < n and pomy < m and pomx >= 0 and pomy >= 0 ){
                    aktualne += a[pomx][pomy];
                    pomx++;
                    pomy++;
                }
                pomx = x - 1;
                pomy = y - 1;
                while( pomx < n and pomy < m and pomx >= 0 and pomy >= 0){
                    aktualne += a[pomx][pomy];
                    pomx--;
                    pomy--;
                }
                //cout<<pomx <<","<<pomy<<endl;
                pomx = x + 1;
                pomy = y - 1;
                while( pomx < n and pomy < m and pomx >= 0 and pomy >= 0){
                    aktualne += a[pomx][pomy];
                    pomx++;
                    pomy--;
                }
                //cout<<pomx <<","<<pomy<<endl;
                pomx = x - 1;
                pomy = y + 1;
                while( pomx < n and pomy < m and pomx >= 0 and pomy >= 0){
                    aktualne += a[pomx][pomy];
                    pomx--;
                    pomy++;
                }
                //cout<<pomx <<","<<pomy<<endl;
                pomx = x;
                pomy = y;
                if (aktualne > max) {
                    max = aktualne;
                }
            }
        }
        tab[i] = max;
    }
    for (int i = 0; i < ile;i++){
        cout<< tab[i]<<endl;
    }


}
