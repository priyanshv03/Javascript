#include<bits/stdc++.h>
using namespace std;
int main(){

int t; cin>>t; while(t--){
    int n, r;
    cin >> n >> r;
    int arr1[n];
    int arr2[n];
    for (int i = 0; i < n;i++){
        cin >> arr1[i];
    }
      for (int i = 0; i < n;i++){
        cin >> arr2[i];
    }

    int arr3[n];
    for (int i = 0; i < n;i++){
        arr3[i] = arr1[i] - arr2[i];
    }
    sort(arr3, arr3 + n);
    int c = 0;
    for (int i = 0; i < n; i++)
    {
        c += (r / arr3[i])-1;
        r = r % arr3[i];
        if(r==0)
            break;
    }
    cout << c << endl;
}
return 0;
}