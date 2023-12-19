#include <iostream>
using namespace std;


int len(int n){
    if (n < 10) return 1;
    else if (n < 100) return 2;
    else return 3;
}

int tab[3][10];
int main(){
    int ile,z;
    cin>>ile;
    for (int i = 0;i < ile;i++){
        for(int j = 0; j < 6;j++){
            cin >> z;
            tab[i][z]++;
        }
    }

    int max = 0;
        //sprawdzanie kolejnych liczb
        for(int i = 1; i < 1000;i++){
            int pom = i;
            //zapisywanie cyfr do tablicy
            int length = len(pom);
            int digits[length];
            for(int j = 0; j < length;j++){
                int x = pom % 10;
                digits[j] = x;
                pom = pom / 10;
            }
            if (length == 1){
                int a = digits[0];
                if (tab[0][a] > 0 || tab[1][a] > 0 || tab[2][a] > 0) max = i;
                else break;
            }
            else if (length == 2){
                int a = digits[0];
                int b = digits[1];
                if ((tab[0][a] > 0 && tab[1][b] > 0) ||
                        (tab[0][a] > 0 && tab[2][b] > 0) ||
                        (tab[1][a] > 0 && tab[0][b] > 0) ||
                        (tab[1][a] > 0 && tab[2][b] > 0) ||
                        (tab[2][a] > 0 && tab[0][b] > 0) ||
                        (tab[2][a] > 0 && tab[1][b] > 0)) max = i;
                else break;
            }
            else {
                int a = digits[0];
                int b = digits[1];
                int c = digits[2];
                if ((tab[0][a] > 0 && tab[1][b] > 0 && tab[2][c] > 0) ||
                    (tab[0][a] > 0 && tab[2][b] > 0 && tab[1][c] > 0) ||
                    (tab[1][a] > 0 && tab[0][b] > 0 && tab[2][c] > 0) ||
                    (tab[1][a] > 0 && tab[2][b] > 0 && tab[0][c] > 0) ||
                    (tab[2][a] > 0 && tab[0][b] > 0 && tab[1][c] > 0) ||
                    (tab[2][a] > 0 && tab[1][b] > 0) && tab[0][c] > 0) max = i;
                else break;
            }
        }

cout<<max<<endl;
}
