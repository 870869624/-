package main

import "fmt"

//type animal interface {
//	mover
//	eater
//}
type mover interface {
	move()
}

type eater interface {
	eat(string)
}
type cat struct {
	name string
	feet int
}

func (c *cat) mover() {
	fmt.Printf("走猫步。。。")
}
func (c *cat) eater(food string) {
	fmt.Printf("吃了%s, ", food)
}

func main() {
	//var a1 animal
	d1 := cat{
		"bosimao",
		1,
	}
	d2 := &cat{
		name: "jilaolian",
		feet: 2,
	}

	d1.mover()
	d1.eater("猫屎")
	//a1 = d1
	fmt.Println(d1)
	fmt.Println(d2)
}
