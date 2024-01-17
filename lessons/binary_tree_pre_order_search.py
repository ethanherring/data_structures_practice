# Print the binary tree's preorder traversal
#
# Preorder Traversal = a tree traversal method that visits the root node first followed by the left subtree and then the right subtree. 
#      It's called preorder traversal because the root node is always visted before any of the child nodes. 
#
#
#
# Problem:
# Complete the  function in the editor below, which has  parameter: a pointer to the root of a binary tree. It must print the values in the tree's preorder traversal as a single line of space-separated values.
#
# Input Format
# 
# Our test code passes the root node of a binary tree to the preOrder function.
# 
# Print the tree's preorder traversal as a single line of space-separated values.
#


# left and right properties are defined in the class

def preOrder(root):
    if root is not None:
        print(root, end=" ") # adding a space so that all the outputs are in one line
        # traverse to the left of the root note
        preOrder(root.left)
        # traverse the right node
        preOrder(root.right)

tree = BinarySearchTree()
t = int(input())

arr = list(map(int, input().split()))

for i in range(t):
    tree.create(arr[i])

preOrder(tree.root)
