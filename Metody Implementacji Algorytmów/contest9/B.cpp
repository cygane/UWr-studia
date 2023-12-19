#include<iostream>
#include <vector>
using namespace std;

const int mx=1e5+1;
vector<int>adj[mx];
int n;

bool star()
{
    bool x;
    int policz1=0;
    int reszta=0;
    for(int i=1;i<=n;i++)
    {
        if(adj[i].size()==1)
        {
            policz1++;
        }
        else if(adj[i].size()==n-1)
        {
            reszta++;
        }
    }
    if(reszta==1 && policz1==n-1)
    {
        x=true;
    }
    else{
        x=false;
    }
    return x;
}

bool ring()
{
    bool x=true;
    for(int i=1;i<=n;i++)
    {
        if(adj[i].size()!=2)
        {
            x=false;
            break;
        }
    }
    return x;
}

bool bus()
{
    bool x;
    int one=0;
    int two=0;
    for(int i=1;i<=n;i++)
    {
        if(adj[i].size()==1)
        {
            one++;
        }
        else if(adj[i].size()==2)
        {
            two++;
        }
    }
    if(one==2 && two==n-2)
    {
        x=true;
    }
    else{
        x =false;
    }
    return x;
}
int main()

{
    int m,u,v;
    cin>>n>>m;
    for(int i=0;i<m;i++)
    {
        cin>>u>>v;
        adj[u].push_back(v);
        adj[v].push_back(u);
    }
    if(star())
    {
        cout<<"star topology"<<endl;
    }
    else if(bus())
    {
        cout<<"bus topology"<<endl;
    }
    else if(ring())
    {
        cout<<"ring topology"<<endl;
    }
    else{
        cout<<"unknown topology"<<endl;
    }
}