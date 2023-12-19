#include <iostream>

const int maxx=200000;
using namespace std;
int parent[maxx];

int find_parent(int u)
{
   if(parent[u]==u) return u;
   int f=find_parent(parent[u]);
   parent[u]=f;
   return f;
}

int main()
{

    int res=0;
    int root=-1,n;
    cin>>n;
    int pa[n+1];
    for(int i=0;i<=n;++i) parent[i]=i;

	for(int i=1;i<=n;++i){
		cin>>pa[i];
		if(pa[i]==i) root=i;
	}

	for(int i=1;i<=n;i++)
    {
        if(i==root) continue;

        int fc=find_parent(i);
        int fp=find_parent(pa[i]);

        if(fc!=fp) parent[fc]=fp;

        else
        {
            res++;
            if(root==-1) root=i;
            parent[fc]=find_parent(root);
            pa[i]=parent[fc];

        }

    }

    cout<<res<<endl;
    for(int i=1;i<=n;i++) cout<<pa[i]<<" ";

    return 0;
}