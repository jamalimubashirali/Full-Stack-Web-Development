# try:
#     file = open("myFile.txt",'w')
#     a = 0
#     while(a<10):
#         data = input()
#         file.write(data + "\n")
#         a+=1
# except FileNotFoundError as e:
#     print(e)
try:
    file = open("myFile.txt",'r')
    for x in file:
        print(x)
except FileNotFoundError as e:
    print(e)