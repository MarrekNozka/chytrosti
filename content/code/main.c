// Vzorový projekt 

#include "stm8s.h"
#include "assert.h"
#include "delay.h"
//#include "milis.h"
//#include "spse_stm8.h"
//#include "stm8_hd44780.h"

void delay1s(void) {
	uint16_t i;
	for (i=0; i<5000; i++) {
		_delay_us(200);
	}
}



void main(void){
//CLK_HSIPrescalerConfig(CLK_PRESCALER_HSIDIV1); // taktovat MCU na 16MHz
//init_milis(); // rozběhnout milis časovač

	uint16_t i;
	
  GPIO_Init(GPIOC,GPIO_PIN_5,GPIO_MODE_OUT_PP_LOW_SLOW);

  while (1){
		GPIO_WriteHigh(GPIOC,GPIO_PIN_5);
		delay1s();
		GPIO_WriteLow(GPIOC,GPIO_PIN_5);
		for (i=0; i<5000; i++) {
			_delay_us(200);
	  }
  }
}

