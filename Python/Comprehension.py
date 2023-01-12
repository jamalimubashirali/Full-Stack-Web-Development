# List Comprehension
data = [1,2,3,4,5,6,7,8,9,10] 

data = [str(x)+" * 2 = " + str(x*2) for x in data]

for x in data :
    print(x )

# Dictionary Comprehension
number = [1,2,3,4,5,6,7] 
days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturady","Sunday"]
new_Dic = {key:value for (key,value) in zip (number,days)}
print(new_Dic)
for x in new_Dic :
    print(new_Dic[x])

# Generator Comprehension
my_gen = (x for x in data)
print(type(my_gen))