# Complete the  function in the editor below. 
# It received  parameter: a pointer to the root of a binary tree. 
# It must print the values in the tree's postorder 
# traversal as a single line of space-separated values.
#
#
# Constraints
# 1 <= nodes in the tree <= 500
#
# output foramt:
# print the tree's postorder traversal as a single line of space-separated values
#
#

# Postorder Traversal is a tree traversal technique that visits nodes in the 
# order of left right and node
#
#



def postOrder(root):

    if root is None:
        return

    postOrder(root.left)
    postOrder(root.right)
    print(root.info, end=" ")
    return root

