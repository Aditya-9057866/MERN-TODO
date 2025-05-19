#include<iostream>
using namespace std;
class Node{
  public:
  int val;
  Node *left;
  Node *right;
  Node(int val){
    this->val = val;
    left = right = NULL;
  }
};
Node* create(){
  int val;
  cout << "Enter value";
  cin >> val;
  if(val==-1)
    return NULL;
  else{
    Node *root = new Node(val);
    root->left = create();
    root->right = create();
    return root;
  }
}
void inorder(Node* root){
  if(!root)
    return;
  inorder(root->left);
  cout << root->val << " ";
  inorder(root->right);
}
int main(){
  Node *root = NULL;
  root = create();
  inorder(root);
  return 0;
}