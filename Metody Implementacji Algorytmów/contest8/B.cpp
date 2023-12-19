#include <iostream>
using namespace std;
 
#define MOD 1000000007
long long int dp[1005][1005];
 
void licz() {
    for (long long int i = 0; i < 1005; i++) {
        for (long long int j = 0; j <= i; j++) {
            if (j == 0) {
                dp[i][j] = 1;
            } else {
                dp[i][j] = (dp[i-1][j] + dp[i-1][j-1]) % MOD;
            }
        }
    }
}
 
int main() {
    licz();
    long long int n;
    cin >> n;
    long long int suma = 0;
    long long int ile = 1;
 
    while (n--) {
        long long int x;
        cin >> x;
        ile = (ile * dp[suma + x - 1][x - 1]) % MOD;
        suma += x;
    }
 
    cout<<ile<<endl;
}