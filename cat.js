// ============================================================
// CatGame — reusable pixel cat for any canvas on the page.
// Usage:
//   CatGame.init({
//     canvas:       <HTMLCanvasElement>,
//     gridW:        320,        // logical width in grid units
//     gridH:        180,        // logical height
//     groundY:      152,        // y of cat's "feet" line
//     showBg:       true,       // draw scene background
//     showGround:   true,       // draw ground line + texture
//     toys:         true,       // enable toy spawning
//     toyPicker:    '.toy-btn'  // optional selector for toy buttons
//   });
// ============================================================

(function () {
  const FRAME_W = 40;
  const FRAME_H = 40;

  // Sprites are inlined as data URLs so they load reliably regardless of how
  // the page is served. This block is loaded once and shared by all instances.
  const SPRITE_DATA = {
    idle: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAAoCAYAAACPQCMpAAAEO0lEQVR4Xu2cu4oUQRRAa79hE7NNjERBEHyAsSAIJopfYKoYrBgIi2AgbqS/oYkgCMaCDxAExchkM5P9hpEqpsrq6urpnurHvbt1OtDdnunuW+fee7qqZ3THsEEAAhColMBOpeNm2BCAAAQMAqQIIACBagkgwGpTz8AhAAEESA1AAALVEkCA1aaegUMAAgiQGoAABKolgACrTT0DhwAEECA1AAEIVEsAAVabegYOAQggQGoAAhColgACrDb1DBwCEECA1AAEIFAtAQRYbeoZOAQggACpAQhAoFoCCLDa1DNwCECgJgGujMn+7zdd+6kOCExJgPqbkuZE55pSgJoTvLp564758P6txRaPuWv/RHi3Oo1mflsNROjNmvlRf0JF0XfZqQSoOcEutvOXrphf3796CToufv/hs/1UjH3cpn5dMz8/VgRTlnXqr4xbetQs9TeFALUn2MW3acvMDKdJ2bCzaOdnR6FZ0Nr5UX/D+mDTu2arv8kEqF0wxFdchQimGJ078EQIUHt/zLWCO+0C7Cy+G7fvmo/v3oS8C84CaZDTKxht9ZdbRlZdfyUCjCFqS3DruUG6/P32+ZO5fO268QL0vwsJUDs/7TMY7fxa8QnW32r/4NAkz7s18kslPaugtxVgClFTgl2z5j7lja1oC/Dpi1dh1/MnD50QtQhQsEFy8zCNDRLHqan+bO3ZrfUtA0X1lz5L08TP9W8i6dnrbxsBtuDZiHMzLCHBtOD5wotjtDM/u315+dpcffzA/fzo/r20cMctytpHZ5ceyvgNEqCgoFPBuN+V1J+rvehbBravfLyNGIXqz+c27mG3Twm/XHyO4dwruFIBBnC/f/4w5y5cDM0jlODOxNr47GZjtA9S022Br8DEYg6X94lVwi8rP0UNEhphPVPXVn9u9mL/2Ns7a46O/jTiE66/OLerXHwK+ldM0NsI0CXZAvQJtX8rEEwDXhyPf8HvS7vcFmrHvw6ZfAYYC08hvzBb8QNXJOjGDURx/YU6tDHGUlFQfy0J+vgU9W/wS3oDmVPQ2wpwowQFBROKz9+FY8nEoo5jXFCAYYaQi0+4QcLyLb2hKbrBNT5465KggvrL9oeS+msIOncT1sRvKUGXCLCR5E1TpYUF07rL9U3jiC8QaswAlQuG+usr7P7Xw0pOYf92rjLnEPRsAhSUy6AGIb6NXdLbIPCDX79ni9+xWP2NEqBtgt3dM+b4+K8bqX/AGu0rPX8xufWB4WEv8RWhhF8Rtv8z6kwv0B/DmS5Wf6WCWizA4cwa7yS+QnDcQMaBg9/J4lcqQLfMXH+C2nhAndk3CZGCkxBfAbToEPjBbxyBcUcvUn9jBDhueBwNAQhAQJgAAhROAJeHAATkCCBAOfZcGQIQECaAAIUTwOUhAAE5AghQjj1XhgAEhAkgQOEEcHkIQECOAAKUY8+VIQABYQL/ADsQFWVtAs1aAAAAAElFTkSuQmCC',
    blink: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAAoCAYAAACPQCMpAAAEP0lEQVR4Xu2cO2sVQRSAJ78hjV0aK1EQBB9gLQiCjeIvsPVRRAQDIkQQ06h/QxtBEKwFHyAIipVNOpv8hisz3BlmZ+fevTv7OCeZb4uY7L27e+Y753wzu7lxy7BBAAIQqJTAVqXjZtgQgAAEDAKkCCAAgWoJIMBqU8/AIQABBEgNQAAC1RJAgNWmnoFDAAIIkBqAAASqJYAAq009A4cABBAgNQABCFRLAAFWm3oGDgEIIEBqAAIQqJYAAqw29QwcAhBAgNQABCBQLQEEWG3qGTgEIIAAqQEIQKBaAgiw2tQzcAhAoCYBLozJ/u83q/ZTHRAYkwD1NybNkc41pgA1J3hx/cYt8/HDO4stHvOq/SPh7XUazfx6DUTozZr5UX9CRdF12bEEqDnBLrazFy6Z3z++eQk6Ln7/wbPdVIxd3MZ+XTM/P1YEU5Z16q+MW3rUJPU3hgC1J9jFt27LrAzHSdlmZ9HOz45Cs6C186P+NuuDde+arP5GE6B2wRBfcRUimGJ07sBjIUDt/THVHdxJF+DK4rt287b59P5tyLvgKpAGObmC0VZ/udvIquuvRIAxRG0Jbj03SG9/v3/5bC5euWq8AP3PQgLUzk/7CkY7v1Z8gvW32H16YJLn3Rr5pZKeVNB9BZhC1JRg16y53/LGVrQFuPfiddi1//i+E6IWAQo2SG4dprFB4jg11Z+tPbu1PmWgqP7SZ2ma+Ln+TSQ9ef31EWALno04t8ISEkwLni+8OEa78rPb15dvzOVH99z3D+/eSQt32E1Z++jsrYcyftoFmArG/ayk/lztRZ8ysH3l423EKFR/PrdxD7t9Svjl4nMMp76DKxVgAPfn109z5tz50DxCCV6ZWBuf3WyM9kFqus3wEZhYzOHyPrFK+GXllzaIZ/lg73l4/6v9J+77w8O/U04ioRGWK3Vt9edWL/bLzs5pxyLOr3D9xbld5OJT0L9igu4jQJdkC9An1P6rQDANeHE8/gW/L+3yiZu2UXi5hlDEL6xWfNCKBN2YQBTXX6hDG2MsFQX115Kgj09R/wa/pBPIlILuK8C1EhQUTCg+PwvHko5FE8c4owDDCiEXn3CDhNu3VMjKBO1rdeUkrKD+sv2hpP4ags4tYjTxm0vQJQJsJDmFJiiY1iy3Ljb72swC1BxfYwW4apWlpEGov67C7n49TCIK+3fWCW4yAQrKZaMGIb61XdLZIPCDX7dni98xW/0NEqBtgu3tU+bo6J8bqX/AGu0rPX8xueWB4WEv8RWhhF8RtnAQ/I4Jv1JBkeBjkuDCMMlvITgm4GHg5uZXKkB3m7n80GfjL0My+0YhUnAS4iuAFh0CP/gNIzDs6Fnqb4gAhw2PoyEAAQgIE0CAwgng8hCAgBwBBCjHnitDAALCBBCgcAK4PAQgIEcAAcqx58oQgIAwAQQonAAuDwEIyBFAgHLsuTIEICBM4D8p8w9l6VMqiwAAAABJRU5ErkJgggAA',
    walk: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAAoCAYAAACPQCMpAAAE70lEQVR4Xu2cu4tTQRTGZ/t029htYyUKguADrAVBsFH8C2wVixULQQQLcSv9N7QRBMFa8AGCoFjZbGezXfrIDDnDmcfNfWTunLOZL8262Zvcb37nO9+c3MTsGdxAAARAoFECe42uG8sGARAAAYMAhAlAAASaJYAAbLb0WDgIgAACEB4AARBolgACsNnSY+EgAAIIQHgABECgWQIIwGZLj4WDAAggAOEBEACBZgkgAJstPRYOAiCAAIQHQAAEmiWAAGy29Fg4CIAAAhAeAAEQaJYAArDZ0mPhIAACCEB4AARAoFkCCMBmS4+FgwAItBSAK2Oy337TdT/cAQIlCcB/JWkWeq6SAai5wKubt+6Yjx/eWWx8zV33F8I76mk08xu1EKGDNfOD/4RM0XfaUgGoucBO2/lLV8zvH98oBB0Xuv/o+WEcjH3cSv9dMz9aKwJmWtXhv2nc4kfN4r8SAai9wE7fpltmMixTsmHPop2fXYXmgNbOD/4b1gebjprNf8UCUHvAQN9kFyJgJqNzDzwVAai9P+Z6BbfrAdhpvhu375pP79/6ugtOgWiQ3Q0Y+G98beOXurP2x5QA5AK1FzjR9/3LZ3P52nVDAUi/CwWgdn7aJxjt/LT5b3C4CA0Iq8NnRya6Jq8qAGOB2gqcXDiNr//ZwHv68rU/7sWThy4QtQQgAnrUyAD/Dcc1KFyE/Rdf65t9gxszASbi6J1UXgPhgMm9UxRAtDubvX199cZcffzA/fvR/Xv2xxgWw223+chsAysJaMvSvVMe11dognZ6WJ069Qnxi/URNk3+6w0Y6f5lH1dz/Ob235im5/C8sD+/fppzFy76HhEMmGQ6JVEHB2edRnshNb5V+ghMNpitFtJGuoT4UfN6PF3vnAs1iA+R9aSuzX/Oe+xjVravHFNbX3sT9l8QxsRQkf+8Psvr+PhvEnx0QGn/jQlAq2HFC0qiKAQlA6Zr57Daum4WdIXJjwdzEjCkT7BBfPNacVwP/S68wQX8lPrP9QYFCm9gBf7j9nf9m9Mn6L+4PZ1G8tzcA9bYAMyGYFeRKwVMsLvFDcybOiZdUZ+fYLTq42zikNGwwfGXvjl9uU2uYn2TkOGbhpL+CKYs7fpoauab8BwD1pQADEKwc7wyxu00FSaswHy0C8cAFTSIf5mpvYE5Q2X1DZp4kzb7NwH/aR4QEnZ8ylLQH8kmUqO+uxaAp6FBVG8gFM595lsul+6Qk5N/tTe5QfysPiFt2vUF1yYVbnCr/f0zTtZiseiz4dab3FYByEzmhJLwtfHcBWCBXdhf5yBNpIdrtHAFtPnmWJ/bMeP6aPoS0ub0ket6tHHtU33Ua/COA4Ia84mVuEa1r66P2LEe8G+IWI2MbU1tPlwyPepRC/VtMAFGfeD/xj1ZQudU+NyAwberrJW6d8FKCJzQIfF5kw9/CoZMoi3TCM6kgtOLn6IjHbl6Sn2VWI5R8jEZIY6xtuA/DmQ2l6k9OKE13EM4p2xNhbjF6xmibWv/bQN/yMmHHDO1kJseN+S8Q46poa3rIzLb1KaU7tzmoUEXNXKfFi01ztVDSlsSNJnr9M1o6zNQqUbC84AACICAOgIIQHUlgSAQAIFaBBCAtUjjPCAAAuoIIADVlQSCQAAEahFAANYijfOAAAioI4AAVFcSCAIBEKhFAAFYizTOAwIgoI7Af+vq2lZsiFFiAAAAAElFTkSuQmCC',
    run: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAoCAYAAAB5LPGYAAADdElEQVR4Xu2avYsUQRDF+/LNLjG7xEgUBMEPMBYEwUTxLzBVDE4MDkQwEC/Sf0MTQRCMBT9AEBQjk8tMLtt8pJrtpqe3e7prpnpq7nyb7N1sz9Sb935d3bPsjsELDig6sKNYG6XhgAGAgEDVAQCoaj+KA0AwoOoAAFS1H8UBIBhQdQAAqtqP4gAQDKg6AABV7UdxAAgGVB0AgKr2ozgABAOqDgBAVftRHACCAVUHAKCq/SguCWBnTPLXNbnjcP/kOSCesRSA3c1bd8yH92/J0vCaueMnz/r2isXDFZbcJGMJAK2w85eumF/fvzoI7b2744fP9mMwhb2putySA24SbpUrdYOaZSwG4NB9JDpj3W3zRg0t9UsOuFm4PPsGR1uNLTKuBbAYbgtxDAO7/aeHJtNplx5ws3AZ/pWGNtNYA2Ax3JT6G7fvmo/v3viPZuiCYZfrSWo1e0upVX7eLNzK+qVhWX0SGVcBmHnAIOFb4r59/mQuX7tunDj3/5wAhsBR3YUAmFpFmoZbIqvy86YZ1wDoQQsgIjP9g0Z4IwTcwYtX/tDzJw8tkHMAuLd31tY9d+Giff/984f/OzZbYvZWBmj9y2wRmobL0Dc0NKlRKuNaAHsQhh0lDpmCpdeXl6/N1ccP7N+P7t+jN06tsd51IYQpAJU6dOohyE7iuDsrTuCc59ZTN6lpkGTGHCh64Tq1FLLrOvRVTPxS+ArG6wy7odOlGHBvj+rAW9AEzm4RWmbMApBCjJc5t9Slps/R0R93mFNnbPcLz8tCKDl7RwjdmsQtw2XoC7cI4Wrll1+nM77mJuPR+dae2O3unvG1V6tV8d7W67Ufc3z8d64leBDCpXXocK86MIFrMypmUhjgYdvs13vbA3UAXecbc5dTZ8mYmrTxL2lW0kW3U9RGgxT02X1pvI/O+S+hjzO7/JPvCCA4dUZcfusUHzB14lTHljBvgtAigEvUR5oITnqnFVFiZZsbjAmZsU/12wYySto4tpr+CVYbTYxgn2xHkE6aNBLhTtWY8Ezcx9MMoF3qXAgLA9BqiyFcmEbbpRPdzj0ti/zM7rQD2Hso2XwXKWLcxO7iTncTxOUgGq6AxuZ6/icABfLAJaQdAIDSjuJ6LAcAIMsuDJZ2AABKO4rrsRwAgCy7MFjaAQAo7Siux3IAALLswmBpB/4BVorpOB1E3dYAAAAASUVORK5CYIIA',
    attack: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAAoCAYAAAAlg+WVAAAE00lEQVR4Xu2cv4oVMRTGs+AbbGO3jTaiIIj/wFoQBBvFJ7BVLFYsBBEsxK30NdxGEBSxFFxdBEERYbdZsLDZ7pYLVxLvGc7kJjOZm2Ry4nzTqHedzDe/c86Xk8ncXVM4QAAEQCATgbVM42JYEAABEFAwGCQBCIBANgIwmGxoMTAIgAAMBjkAAiCQjQAMJhtaDAwCIACDQQ6AAAhkIwCDyYYWA4MACMBgkAMgAALZCMBgsqHFwCAAAjAY5AAIgEA2AjCYbGgxMAiAAAwGOQACIJCNAAwmG1oMDAIgAINRSu3uHc3tVDh/8hjYoD5AIJJAiiLSxekax/d5pOSo071ad/eOnAPDaKJ44+SJE4g1mPm16zfV2zfbhJHG45/HXiNViHq1CjCZmsw6VVxSjSOd3ST1xRa/KdrT5y6qH18/c6NR9PnWk02dQLHXSZGEQVoLmkyvAQrhmCIWqcfwTWhSJrrJ6ostfAOu61h0N7HXSZGQQVpLG0wlZp0iHqnGCJo4CprzpPXFFr6zaK/euKXev35lEki6wdhafQaj7yXz85ggAyxYKKkMIfU40rlNWl+MwSyB+/Lpo7pw+YqioqV/CzCZQVoLdTE1mXVqk4gZb9IFHANucW5WfskN5tGzF809P314zxiOVIPxaS1gMIMMUEAXI+WBpbc4eGdasJOevL6kBqODqo+d5y/VpQd3zd/1UkmiwWhtWi9p5Us6KQbTZ9b6/Z3MyzbXBCnpgaV0Y568vlUNZr6xccIk36kzZ5skJIPhWXn/zm0Ju0hGb4jWAuai+XiXRy4DpA6GXhAc0WRKP7C0OydnAfcZc4JlhW8I6LPIRBsMmYze/bAPSVvU3BB9Wks+4A01QL48KmUwXQWasVudbz7eUiynmrev+U6mq4seaZKDPkdirGwwFNSf37858+3gYF9C59LqDlxaFzrNPZTqXvS1QwzQfvbCv+IQ2cVQsfJ84F+faL1AaQd8hF1D+x0h856VPiimujstOMlBn2fWGWIwvP1rWlNetLPZrLnM4eEfCQaz1EL7DHH7wy8nosjCtcfsbKH7DDCTwZiZl70oqXOiFV8yYfudp5F3DY0mbigEV8gkB30RHQxv/8wwrg6GdwMSdjr4ssNOQm6G+n7e7fxewpPaXFiLb65lL4t8hULCeFdof0EzUqvpVuhrHy5u+tougxn5eYfR6Xr+12HOQybRrtVfyM+gz6I0BH7LoV20JS2LKAk7dLZ+xJdHkcXalYhOhrq97zNAuyNMuDziep0P711dA53k24nLPME0OrtgF8xH6FsEZojB6FNav9bALuKCAV0qEuqmBGrsZKhvxOoE6d6GxipkxnX9n2CTKbhr2FvAhXMR+lY0GG8hr68fVwKeu7QetpG56GTT+vQhQCMxbJJQoL7OAin8QNVMdDq2xG0RU7N0sj4by5Rto4a+/9BglrYJKeH0vQoxQOkG3TI/XqyuJaej0xqroFHAq/an/84bjV9sQrR2ljKvu0OQLu3SME3SfwGWNH2kh/9pxyA2f0Ji6vs/tj5awptdMEG56KqRyegrmSAxyYVzQQAEKiAAg6kgSJAIArUSgMHUGjnoBoEKCMBgKggSJIJArQRgMLVGDrpBoAICMJgKggSJIFArARhMrZGDbhCogMBfpznJViOwPTYAAAAASUVORK5CYIIA',
    sit: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAAoCAYAAACPQCMpAAAD+ElEQVR4Xu2cO4sUQRSFa/P9D5sYmgk+wFgQBBM1NjPTaMVAEMFA3Ej/hiaCIBgLPkAQFCOT/Q+Tj9xiqumurhn7WX1m6utgd7Z3eubWd849fae32SPHBgEIQKBQAkeFrptlQwACEHAEICaAAASKJUAAFis9C4cABAhAPAABCBRLgAAsVnoWDgEIEIB4AAIQKJYAAVis9CwcAhAgAPEABCBQLAECsFjpWTgEIEAA4gEIQKBYAgRgsdKzcAhAgADEAxCAQLEECMBipWfhEIAAAYgHIACBYgkQgMVKz8IhAAECEA9AAALFEiglANfOJf/117b9xRqChc9CAP/NgnX8i04VgMoCr2/euuM+fnhntOrr3bZ/PNX+r6DMr/9q8h+hzA//5fdD53ecIgCVBfa1Xbx0xf3+8S2EoIcT9p89P42DsTO8iZ6ozC8skYAZJjb+G8YtPmo2/40NQHWBfX27tsRkOI1k3V5FnZ+tQjmg1fnhv259sOtZs/pvkgBUDxjqG+xCAmYwOn/gXgSgen/M+QnukAMwab4bt++6T+/fNjRfcAqkQQ43YPDfOG2znEDGBKC6wI36vn/57C5fu+5CAIafjfJCAajOL4sBR/SIOj/8N0LczaGzDwiTBaB6wFh9T1++riR58eSRD0SVAFTnF8AJTdB7FTD4r3caZjnBTRqAYgHTmGCscW37+uqNu/r4oX9sH4UXmv5a0xUNMq5BBPmp+S/+S2rrBCLQv/Uas5zg+gbgVoiCAeMNeHJywd27/yDZXSq3wFhxgvwUGyTWsapRkJ+S/9anz85cwu9K/OIas/ivTwAmC/zz66dKwCTD2epLbefnf213n/X3HlH+c4AXWIhfqlylBkmGnwA/813YWjfaC/kvvp1EzX+p211m91/XAEjCM9VFBN569hCoL3UTZyWsQH3J4LOdQgEdQib4VYWf953dZB9dS1apr65tvYe9tkL9W10u2FyS8rXl8N+QAFSD1xA2gBMRtx7MlRnFzFefYCrj7eJnv8s4QVdhEppDlZ9dbjEuYvUF3/nLQYdQ35T+6xqA1fWMeFxYrVZ+1/HxsbPH9j1jc1TihrOFYH07p4GF+TUmmG3TaGC6gL6NE4g1sKC+jSkrrnFhfWNcPgTr2z7UZ5li2xz+6xOAPgTtSwpiCL5wllng+lo1yQjW15iyxOprTYCC9VUffYX915i04pAR6A/qa50+h/8RoNU0m9c2oyr8iynqS4jdYxf8esBKPBV+e8Kv7wQ4blkcDQEIQECIAAEoJAalQAACeQkQgHl5824QgIAQAQJQSAxKgQAE8hIgAPPy5t0gAAEhAgSgkBiUAgEI5CVAAOblzbtBAAJCBP4BGhDEVlF7nicAAAAASUVORK5CYIIA',
    liedown: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA8AAAAAoCAYAAAAxKZPpAAAGVUlEQVR4Xu3du8rlVBQA4MyTTGMlCoLgBawFQbBRfAJbxWLEQhDBQpxKX0MbQRCsBS8gCIqVzTzJL9mQmJOzc3JZSf497u80M3P+k8za31orJyuZMA8aLwIECBAgQIAAAQIECBAgUIHAgwrWaIkECBAgQIAAAQIECBAgQKAxACsCAgQIECBAgAABAgQIEKhCwABcRZotkgABAgQIECBAgAABAgQMwGqAAAECBAgQIECAAAECBKoQMABXkWaLJECAAAECBAgQIECAAAEDsBogQIAAAQIECBAgQIAAgSoEDMBVpNkiCRAgQIAAAQIECBAgQMAArAYIECBAgAABAgQIECBAoAoBA3AVabZIAgQIECBAgAABAgQIEDAAqwECBAgQIECAAAECBAgQqELAAFxFmi2SAAECBAgQIECAAAECBAzAaoAAAQIECBAgQIAAAQIEqhAwAFeRZoskQIAAAQIECBAgQIAAAQOwGiBAgAABAgQIECBAgACBKgQMwFWk2SIJECBAgAABAgQIECBAwACsBggQIECAAAECBAgQIECgCgEDcBVptkgCBAgQIECAAAECBAgQMACrAQIECBAgQIAAAQIECBCoQsAAXEWaLZIAAQIECBAgQIAAAQIEDMBqgAABAgQIECBAgAABAgSqEDAAV5FmiyRAgAABAgQIECBAgACBowbgu6Zpcvueev/sTIgvJs6PX0wgtrX64xcTiG2t/vjFBGJbqz9+MYHY1uqPX0wgtvVu9XfEAHz3xptvNz98/227xOH+p96PUazfWnzrzYZb8ON3xHFjqar6WyqV/xw/fvp3ugb0h/7QH/oj1gX8ngq/vRs9fXk89+LLzV+//9oNwQmie//xZ4/Gg/FRULn9ii+mzY+f/p35cnP829wkji+b6dKG/Pg5Pjs+x7qAH79K5rdDBuBb1ZO5M3xUsU0OwOLLCiz55+npBOse/eZivO/45mpZfHNCt3/Oj9+9n+Df4/FvLvv6Y07I8SUmxI/fDQHn9zfLw/E51j27+0UG4HYYGb7afe0eYMBLfMvx7h59+rgZ3Z0vzW8cY2nxjbXFt7z+sherHF9CgOovxNfw43clcOIJvvpTf+pvugb0h/4I98fWAbgfdP/+848UxJMn/6R/5px7vf7WO82P333T/+iEL5GS4usa9ep56BakIL/hs099LguJb/xcVmn5HfdRSfFlh8uuVwvJ79XFA/GFvt3UX4jvvwu5+mMTpPrbxNZvxI9fL1D5+bPzl1gv8Lvht2UAvnv48Jnm2edf6HfbnSQM32t/+NvPPzUvvfpa0zVw9+cDBuDhkFlSfOmu5fh56AL92nQlt/ZCRoHx9bG1gRYUX/bOeUHxZQ9+4gt9o5R0fJHfUCqzG8tvzJQfvyRw4vnfUFz9qT/1N10D+mNgs2QAHj53mfC613gIzg3An3zxVf/5zz/+IA3EOw/A6WppO4R3w1tp8XVD27gmC/HrwrrIbftmQfFdDOcF5ffirvk4zwX4jZ+ZLrF/r05eCsrvuGX57XByJb+bEdXfZrq0IT9+vUA7oJ9wfur7LVZz/Pil+e6I+XJuAB7e4UppGA7AubwMg2zv/LavX778unnlo/fT7z987932l7m/d2nKL+Kbi2081J0Q32TzTi3wZD/xLa206c9dXTi4tcsT83vVuyX279hqrodP9EsnzOILNQi/EJ/6i/Hx43cp4PvjwsPxOdYg/J5yvyWDaH+Hdela24NM+1+BjF8H/RdIk3eobw2ZJ8a3acgUXzZ7i4bNk+vvYlCaG+C6izAn5Xd1754YX/94QPcIRWHHF/EtTUj+c/z4ZQVOOj6rP/Wn/m5cuO8ez/P9u6lRHF82sfUbFeG3ZADO3gnZuPalf9/G3afNrq7KrNiZ+PitKJf8kB7YwRH1F+mH8VL2jm/P2NpYxRcoPn4xPH78Vgo4/q0EG32cH781As4P1mhdf/Z/57f3gmK8tiZAgAABAgQIECBAgAABAgcJGIAPgrVbAgQIECBAgAABAgQIEChLwABcVj5EQ4AAAQIECBAgQIAAAQIHCRiAD4K1WwIECBAgQIAAAQIECBAoS8AAXFY+REOAAAECBAgQIECAAAECBwkYgA+CtVsCBAgQIECAAAECBAgQKEvAAFxWPkRDgAABAgQIECBAgAABAgcJ/Avw+XCho9QqsQAAAABJRU5ErkJgggAA',
    sleep: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAAoCAYAAACPQCMpAAADQ0lEQVR4Xu2csWoUURSGb54kjVVQCFiYJxAEwUbxCWwVC8XCRkgRTKWvoU1AEKwFxSoQsLJJZ5NnWLnjzmRmM7vZOTNz739zvmmyDLk7//3Of/4zM4TsBA4IQAACTgnsON0324YABCAQCEBMAAEIuCVAALotPRuHAAQIQDwAAQi4JUAAui09G4cABAhAPAABCLglQAC6LT0bhwAECEA8AAEIuCVAALotPRuHAAQIQDwAAQi4JUAAui09G4cABAhAPAABCLglQAC6LT0bhwAECEA8AAEIuCVAALotPRuHAAQIQDwAAQi4JUAAui09G4cABAhAPAABCLglQAC6LT0bhwAECEAdDyxCuPIfuvvO5VKsri8XF65bMIEpA1C9QZT1LR48fBy+fvkcrVTXpO9cLqup64tclOtbgr5c3sp63akCUL1BitB3++69cPzuVWOIGIqtc1PVymK4ip+6PgaIpbTNGpcDZKqmKqJB1Bt4k31XmnuU0w2Lq/qq61Ovr7o+jwNk0gBUbxD0GaLv/5IiApD6jquvekDPoY8AXHom4x3W2nC5/+hJ+HbyqXF1Jo3q+ghoc+5dPv6WcIc/x4AbE4DxnUF1rIOXuYGL0Le7eyvs3dnvra0CP3V9+M+cfk1/bGJYf3uG4ZtEnzUAq7uC32enFR/BBi5W368f3yumb48+NM4+fPOi+nxx8Tf+sNZsSKes5aeur73JjAOkWP9542dpps4jUQzBdgAKNEhx+laHSGzcePx8/zEcvH5efX757GnS8KsboW/IqenDf0NmW/d97mr/CgTgxv6dWt/QAFzER6J2w4o1SLH6aqbxRe/qsfzTmKG1GtQVy19ey09dXzsEMwZ0kf4TGiC9/ObUt01TdZ7F6wDs664oNEMD3xh9fUzPz//Mfee3NT91ffivd+ZtVd+MAySrvusCsPMuw3JLMXMDo89SlMs18INfQyDDABnkvzn0XReAEU4noQ1+2eYahq9tlqBvDD3qO47ezeeX9AnEWAxzxpgXGoWyDAIQgIAMAQJQphQIgQAEUhMgAFMT53oQgIAMAQJQphQIgQAEUhMgAFMT53oQgIAMAQJQphQIgQAEUhMgAFMT53oQgIAMgX/KPmhH4tG5VQAAAABJRU5ErkJgggAA',
    jump: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAoCAYAAAB5LPGYAAADKklEQVR4Xu2au2sVQRTGJ39DmnRprMSAIPiA1IIg2PhobcROsYikEESwEFPpv6GNIAjWgg8QBMXKJp1NuttfOUPOMjt3793Zx8x3dv22SO7d7O58c77fnJkzmy3HgxEARmAL2DabZgQcASQE0AgQQGj42TgBJAPQCBBAaPjZOAEkA9AIEEBo+Nk4ASQD0AgQQGj42TgBJAPQCBBAaPjZOAEkA9AIEEBo+Nk4AbTDwNK5xnfz686XVp5FHwEsbWNze8tr12+6D+/f6l/Vl/A80qts+pCdsmG9DRXe4HMXLrlf37+GIDo9f/TsQJSi/MqmD9UhG7bbUeEN3nScZkeUX9n0oTpkx3obShoNvnrjlvv47o1XaBHAMfQRQDyAK/B9+/zJXbyy79Rg/Q6CMKu+/xHALNXcAI4bDX7y4lX1yOeHDz2QlgAcS18uAK2ZrGauqyqR1eYKgJL55Pjy8rW7/PiB/yxTsRUAx9SXA0CLJouH2Sq5AdnP69rdPePO7p33j1Fz42c+uncHVQVn1Tc2gFZNrgA0WGl6g+W4ffd+ozz0FkxOfVkABJnc9sbAYqVZafr988dK2I6P/+i5sX1KTdrZ9aV2TMyNpwA9F55Hmbw8eHrkNmSKrJVcqpvRdWv31gTGxWJRXX5y8hcx/RbRlwKgNzfYoZd7aiNDR2q8mVpwO6Fp3RkOEP9GITxE21iVXA8Aa+uqOPsFmQ+VAYvpSwHQr5/kh76vDBfNGjwJGtjk2vtK1aL6dJGvjo5ZyXUEsFrzNd13Cl+qLx2bTrq8qL6uHa3EhYYaMjlJH6jS9INYBq9mOF3cKxZW4CupryuAPhtq4DZBCDK5VR+o0oyXMR5EOcTs7e0d/xm01lP+azNIKX19AKyZ3JTUQSaHUjZOI1HGKbXOCgs5r08zjQCIhi8q4orpGwSgjl4JXjyd6OiOAO3bXtLiJbioFUAL013w71VtW0hd+9/n+lhD+D2bviFAqKjwd9zxIc/vE8RaFmx5AFLb0L7N5n6aMBsrp9kRAjhN32ajmgDOxsppdoQATtO32agmgLOxcpodIYDT9G02qgngbKycZkf+AegT3jgsUt4YAAAAAElFTkSuQmCC',
    crouch: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAAoCAYAAACPQCMpAAAEC0lEQVR4Xu2dy4oUMRiFM08yG1eiIAhewLUgCG4Un8Ct4mLEhSCCC3FW+hq6EQTBteAFBEFx5WaepCWhUyTpVE1VderPX5OvVj1FdfXJd05O0heYA8MBAQhAoFECB42Om2FDAAIQMBQgIYAABJolQAE2az0DhwAEKEAyAAEINEuAAmzWegYOAQhQgGQAAhBolgAF2Kz1DBwCEKAAyQAEINAsAQqwWesZOAQgQAGSAQhAoFkCFGCz1jNwCECAAiQDEIBAswQowGatZ+AQgAAFSAYgAIFmCVCAzVrPwCEAAQqQDEAAAs0SoACbtZ6BQwACFCAZgAAEmiVAATZrPQOHAAQoQDIAAQg0S6DVAtwYk/13AH3nJQOiWZskh7P8Wpo91qyteCaWKkDNEDe3bt81nz6+tzDD8fedLw594IaatYWyNftrdWrWp9ljzdoWyd8SBagZotN24fJV8+fnd1+CDqw/f/ziKC1GqQLUrC0Kn+IFxJWfYn21PR56h1Nb29h5VtTfOQW4ZogO3tCR2RmONWbf6zRr82PTPklWoa9S/jZHz4/NwAKvJX+i/TK1AEOIoY/+PrUhhvDsY38M6rt55575/OGdu1ZbASrRFhVgpQmcvuxof8MnCvo7Wp+gx0Mf82TnrqA2t3uXLukpBRjCc28Z7fH39y9zcvKvy1huhyUEMSrnnL5U24+vX8yV6zeM1+f/XmCS5Fa1cIJ0PD1IQW19fRbp8xfV9HerwWa2m6xK8peWXVZfxfxFC9g235HvCrSlH19kc1k6f7MK8PDwnDl/8VJXgPaBLcGKEKNynqLv2as3HeiXTx+5QixcgNldc1jQVoDnGRaggLbe8kv1afDX79Cn+CuwwDl/7WfKc/QJe7yx7EIv7QKiKH/dPJbK35QCdA1tAabAlEB08HJa+vTZcdjd37fXb821Jw+XfBsc7Qhy/NICFNTmfA2bMCwYv8uvOEmiBURp/jp+U/QJe9ztAnP+Vs5fpE2yX6YW4GAJKoDogjg2hLb80uPxg/v21Bwufbupzlz/INWXK2hBbdEOxmtRVtLRZ7t9/irI36RNgqDHYTZ3NjGV85fOm95N1hL+zp3onchUfSiyksFRCHOtZDXan8Kkh+BPYAb5VdC2swPsa3Pt/mrX5xeWCh5nSzA3f7VqSxflEv1SvAC1GxwaHn55sz0/l8dpu7/eVa7viRW1rXoBIX+joti7APtnt5K/fSZ89lvCU/Dv83qjnA0uGqNPUs9OCSpilZMyhl/6PEmeZ0GfJC/yl0l5TQOmFhrXQwACEChKgAIsipObQQACayJAAa7JLbRCAAJFCVCARXFyMwhAYE0EKMA1uYVWCECgKAEKsChObgYBCKyJAAW4JrfQCgEIFCXwH6BLGFYrfr8rAAAAAElFTkSuQmCC',
    sneak: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAAoCAYAAACPQCMpAAAEYklEQVR4Xu2cvYsUMRjGc3/DNXbXWImCIPgB1oIg2PjR2oidYnFiIYhgIV6l/4Y2giBYC36AIChWNtfZXHf9Hgn3DtlsdiaZzSSZy2+b252bnXnye5/3SWZuuC3FCwIQgECjBLYaHTfDhgAEIKAIQEwAAQg0S4AAbLb0DBwCECAA8QAEINAsAQKw2dIzcAhAgADEAxCAQLMECMBmS8/AIQABAhAPQAACzRIgAJstPQOHAAQIQDwAAQg0S4AAbLb0DBwCECAA8QAEINAsAQKw2dIzcAhAgADEAxCAQLMECMBmS8/AIQABAhAPQAACzRIgAJstPQOHAAQIQDwAAQg0S4AAbLb0DBwCECAA8UAsgYVS3v8kvm577PHZHwJ9BJL6b6oATCqyQT/Uym9x/cYt9enje10S2zvrtpcqXa38SvGIPW+t/JL7b4oATC4ytnoB+9daYC29Vn5G19kLl9Sfn98lBA1q2b73YtcNxoBSJN+lVn72QPFffNkn8V9sAA5d5kwiMpJVkMZCq5ggbYVCJkhbXy08TCNLt/HuNfhvaBA1B3RJfkX8FxOAi93ne2pgljcACzbJkMaiBa6Y3xC3bmXq1vbazdvq84d3ZvOEAaibI2R1Wdp/QeFXYIKrnV8x/0UFoHP/R6DaxvQaMFeT9OgTjSUbxJ35a+e3dMnmTmw/vn5RF69cVVJb+TxBCJrmsC67xbO18PPpMBOGk4Zadwn/1c5PMPXdR17hlsp/YwPQ3PfRr7+/f6n9/X/dvSC76KlEDk2rx7+3AXb6hjS6x56ggX0Frp2faVabjS8An7160+3y8ukjE4gT8TNarAmuFn5duFgr4JVe6OuRTP6rld/KJGv5J4v/RgXgzs5pdebc+S4AZRSyTT7rAMzZJNIgtj4JQP3T1Sc67RWqZeQYNiEZ3QV07fwkbPrYaWb69e31W3X5yUPzXl8KTxSA+vC18usaFf+FtMHafbwLGD15+Ho3lf9im3yhm9cVNLXICKxR+jKvUE0TnwR+Yj63Lo/v39WbYj0VUd6Twc9eIGS6jSCnxH+O28aYNQhijU1SeIUaZcIa+ekB3Ln3wBtYGR+BwX8xU8bqvrPlN4X/xgTg0krGV4vCTdIV2KfNDkHfMjrnKmadjwvzG6yv6JZ7v8efx3ppTDv31rgwP/w3pqLL3+llmNJ/m5jWiDw8PFQHB/87+XKJl1LkCJ5GmzTo9vYpo9G+/NSPIrivTKuYJW2iYYCb7LZJvWIw9vKzD3TMOJcu+9RB/tNfsII6l86FeE6fX7xYi/9sbev853DL7r8+fin9t6khfM8X+f78H9N8qfa1H6yU964291yb8gjV7nvosxZuMoZQfrmY+djiv1DHOSssz71aX2+Urq39yNPKkwkprjxKDnBc6fgWBCAAgUQECMBEIDkMBCAwPwIE4PxqhmIIQCARAQIwEUgOAwEIzI8AATi/mqEYAhBIRIAATASSw0AAAvMjQADOr2YohgAEEhE4Ag0sfVb7ryYdAAAAAElFTkSuQmCC',
    land: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAoCAYAAABpYH0BAAACHUlEQVRoQ+2Yv0pDMRTGT5+hi1sXJ1EQBP+AsyAILopP4Ko4VBwEERzETvoaugiC4Cz4BwRBcXLp5tJnuJLQhJib3JubLymVnjO1Ief0yy9fTkJbxAERaEHZnEwMEDQBA2SAIAEwnR3IAEECYDo7kAGCBMB0diADBAmA6exABggSANPZgQwQJACmswMZIEgATGcHMsBGBAoi53+gvvHa4pPkwGJ9Y4vu724EFHPdvvFaeHahoIR/OklCml1Yos+3FwVRLkWN9067UTwmxYESYFU4nBnklVwAk/eaoNX4J40VwLqGm6XXBAJ0afPCW9vcpofba106xoVNHVh0T3pU0S+y9ZoAgD5tJYCvT4+0uLJKCqD6nhug7Syx26XI1WtqALpcr/XZmgSw4/NLXfLsaF8CHSVAeXuJ+Pp410L6/W897ltwjMgQ9xlPFH27mvpm5uZ1GeE8Ec8XV7R8uCc/H+zuZL+F9S53OtOkBJkATZHmolP0mlCISo+pxRwTTxk7Yp8wMcQLAU+ET6ApLmWvCQAopshjW6XRrCNOzDCa3gW6TEyiF6LtwJS9JhCgmqY1VuUNAcYwgADKnVa7bAvM1WtSA0wBL+YI/9lhIaLdnqLB4EcfG3W8U/eaGICmPnW0rTHIfQhA1W+EAPV4dT5rrIXDghuANHWp33WNNShZnjrKBUFCxzWZAYI7wwAZIEgATGcHMkCQAJjODgQB/gLsLOYpCm5tZQAAAABJRU5ErkJgggAA',
    groom: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAoCAYAAAB5LPGYAAABrklEQVR4nO3av0rDQACA8Ys45hGkdXC0XSz4BgVB0EEXF8HdSboJrkUnfQ5HQdwF/6Agtji5VERcunWP3JHENE3ENGnurvl+UK4JNfkI6fVaFAIAAAAAAAAAAAAAAAAAZuJm/8jT3QBUhqM7AL8azVY4+/Ven5wq9C0UcRBA9w2Ytm4xZT1D3xz3eRubO15CTNr+stFncF/eGVBGiNW1dSFHP8aL7teMPsP7FnMfQQjRf35Qox85sV+3oKPRbCXu161vyfWbRR9fQqBVnhtQTcNx7a3dse3I1F22xL440/rahl+/ovsKmwEf727/3NZN9izVlsXBYUeNJvZFVaWv0I/g4N0Rf5eYgj7z+rLegNGp1rm+ugw3jrvnarw/vRjb9l9T1q/69FnWl+UG9DonZ9FItUZ4672or+Nfnx/qUdvbDp+XffHos6/vv3+sYiInDBeoMjDJYPCeOy4D+iztm2YNaNrFi6PPor4sB/Hq9ZWJnaPRSI2u66rnctR0AemzsC/LDOjIE/snD8mgwHD4LTSiz8K+ae/itB8e1frBgP8zpG+++wAAAAAAACAy+QFbp6+EImsAlwAAAABJRU5ErkJggg==',
  };

  const ANIMS = {
    idle:    { src: SPRITE_DATA.idle,    frames: 8,  fps: 8,  loop: true,  side: false },
    blink:   { src: SPRITE_DATA.blink,   frames: 8,  fps: 8,  loop: false, side: false },
    walk:    { src: SPRITE_DATA.walk,    frames: 8,  fps: 8,  loop: true,  side: true  },
    sneak:   { src: SPRITE_DATA.sneak,   frames: 8,  fps: 8,  loop: true,  side: true  },
    run:     { src: SPRITE_DATA.run,     frames: 4,  fps: 12, loop: true,  side: true  },
    jump:    { src: SPRITE_DATA.jump,    frames: 4,  fps: 10, loop: true,  side: true  },
    land:    { src: SPRITE_DATA.land,    frames: 2,  fps: 12, loop: false, side: true  },
    crouch:  { src: SPRITE_DATA.crouch,  frames: 8,  fps: 8,  loop: true,  side: true  },
    attack:  { src: SPRITE_DATA.attack,  frames: 7,  fps: 12, loop: false, side: true  },
    sit:     { src: SPRITE_DATA.sit,     frames: 8,  fps: 8,  loop: true,  side: false },
    groom:   { src: SPRITE_DATA.groom,   frames: 4,  fps: 4,  loop: true,  side: false },
    liedown: { src: SPRITE_DATA.liedown, frames: 24, fps: 8,  loop: false, side: true  },
    sleep:   { src: SPRITE_DATA.sleep,   frames: 8,  fps: 4,  loop: true,  side: true  },
  };

  for (const a of Object.values(ANIMS)) {
    a.img = new Image();
    a.img.src = a.src;
  }

  function init(opts) {
    const canvas           = opts.canvas;
    const ctx              = canvas.getContext('2d');
    let   GRID_W           = opts.gridW    ?? 320;
    let   GRID_H           = opts.gridH    ?? 180;
    let   GROUND_Y         = opts.groundY  ?? 152;
    const showBg           = opts.showBg     !== false;
    const showGround       = opts.showGround !== false;
    const enableToys       = opts.toys       !== false;
    const adaptiveWidth    = !!opts.adaptiveWidth;
    const adaptiveHeight   = !!opts.adaptiveHeight;
    const fitToWindow      = !!opts.fitToWindow;
    const fixedScale       = opts.scale;          // if set, lock scale instead of computing
    const groundFromBottom = opts.groundFromBottom; // grid units above canvas bottom
    const minGridW         = opts.minGridW   ?? 120;
    const minGridH         = opts.minGridH   ?? 60;
    const obstacleSelector = opts.obstacleSelector;
    const obstaclePadding  = opts.obstaclePadding ?? 0;

    let scale = 1;
    const px = (n) => n * scale;
    // Forward-declare state so fitSize (called below) can safely reference it
    // before it's initialized further down. Using `let` avoids the const TDZ.
    let state = null;

    function fitSize() {
      let cw, ch;
      if (fitToWindow) {
        cw = window.innerWidth;
        ch = window.innerHeight;
      } else {
        const wrapper = canvas.parentElement || document.body;
        const r = wrapper.getBoundingClientRect();
        cw = r.width  || window.innerWidth;
        ch = r.height || window.innerHeight;
      }
      if (fixedScale) {
        scale = fixedScale;
      } else if (adaptiveWidth) {
        scale = Math.max(1, Math.floor(ch / GRID_H));
      } else {
        scale = Math.max(1, Math.floor(Math.min(cw / GRID_W, ch / GRID_H)));
      }
      if (adaptiveWidth)  GRID_W = Math.max(minGridW, Math.floor(cw / scale));
      if (adaptiveHeight) GRID_H = Math.max(minGridH, Math.floor(ch / scale));
      if (groundFromBottom !== undefined) GROUND_Y = GRID_H - groundFromBottom;
      canvas.width  = GRID_W * scale;
      canvas.height = GRID_H * scale;
      canvas.style.width  = (GRID_W * scale) + 'px';
      canvas.style.height = (GRID_H * scale) + 'px';
      ctx.imageSmoothingEnabled = false;
      // Keep the cat in-bounds when the grid resizes — also reset platforming
      // state since obstacle rects are about to be recomputed.
      if (state && state.cat) {
        state.cat.y = GROUND_Y - 12;
        state.cat.x = Math.max(20, Math.min(GRID_W - 20, state.cat.x));
        state.cat.vy = 0;
        state.cat.onGround = true;
        state.cat.platform = null;
      }
      recomputeObstacles();
    }

    // ---------- Obstacles (letters in the headline, etc.) ----------
    // Pixel-perfect ink measurement: render each unique character to an
    // offscreen canvas at the same font, then scan the alpha channel to find
    // the actual topmost/bottommost ink rows. Way more reliable than font
    // metrics (which vary unpredictably between fonts).
    let obstacleRects = [];   // per-letter rects, used for TOY bounce ricochet
    let catPlatforms  = [];   // per-LINE platforms (top + baseline), used for cat platforming
    const _inkCache = new Map();  // key: `${font}|${ch}` -> { top, bottom } offsets from baseline (px)
    function measureInk(ch, fontShorthand) {
      const key = `${fontShorthand}|${ch}`;
      if (_inkCache.has(key)) return _inkCache.get(key);
      const cnv = document.createElement('canvas');
      // Make canvas large enough to fit any glyph at this font size + padding.
      // Extract px value from shorthand like "normal 800 227.64px Saans" — a plain
      // parseFloat(fontShorthand) would return NaN when the string starts with a
      // word like "normal", so match the numeric px value explicitly.
      const _fsMatch = fontShorthand.match(/\b(\d+(?:\.\d+)?)px\b/);
      const fontSize = _fsMatch ? parseFloat(_fsMatch[1]) : 16;
      const pad = Math.ceil(fontSize * 1.5);
      cnv.width  = Math.ceil(fontSize * 2);
      cnv.height = pad * 2;
      const ctx = cnv.getContext('2d');
      ctx.font = fontShorthand;
      ctx.textBaseline = 'alphabetic';
      ctx.fillStyle = '#000';
      ctx.fillText(ch, 0, pad);          // baseline at y=pad
      const img = ctx.getImageData(0, 0, cnv.width, cnv.height).data;
      // Scan rows top→bottom for first ink row
      let top = -1, bottom = -1;
      for (let y = 0; y < cnv.height; y++) {
        for (let x = 0; x < cnv.width; x++) {
          if (img[(y * cnv.width + x) * 4 + 3] > 0) { top = y; break; }
        }
        if (top !== -1) break;
      }
      for (let y = cnv.height - 1; y >= 0; y--) {
        for (let x = 0; x < cnv.width; x++) {
          if (img[(y * cnv.width + x) * 4 + 3] > 0) { bottom = y; break; }
        }
        if (bottom !== -1) break;
      }
      // Convert to baseline-relative offsets
      const result = top === -1
        ? { top: -fontSize * 0.5, bottom: 0 }   // empty glyph fallback
        : { top: top - pad, bottom: bottom - pad };
      _inkCache.set(key, result);
      return result;
    }
    function recomputeObstacles() {
      _inkCache.clear();   // stale if font wasn't loaded on the previous call
      obstacleRects = [];
      if (!obstacleSelector) return;
      const canvasRect = canvas.getBoundingClientRect();
      if (!canvasRect.width || !canvasRect.height) return;
      const xScale = GRID_W / canvasRect.width;
      const yScale = GRID_H / canvasRect.height;

      document.querySelectorAll(obstacleSelector).forEach(el => {
        const cs = window.getComputedStyle(el);
        const fontSize = parseFloat(cs.fontSize) || 16;
        const fontShorthand = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;

        // Measure the actual font-level ascent once for this font.
        // Chrome's getClientRects returns the font bounding box (OS/2 ascent + descent),
        // so r.top is the font bounding box top and baseline = r.top + fontBBxAscent.
        const _mc = document.createElement('canvas').getContext('2d');
        _mc.font = fontShorthand;
        const fontBBxAscent = _mc.measureText('A').fontBoundingBoxAscent ?? fontSize * 0.80;

        const range = document.createRange();
        const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
        let node;
        while ((node = walker.nextNode())) {
          for (let i = 0; i < node.length; i++) {
            const ch = node.data[i];
            if (!ch.trim() || !/[a-zA-Z0-9]/.test(ch)) continue;
            range.setStart(node, i);
            range.setEnd(node, i + 1);
            const rects = range.getClientRects();
            for (const r of rects) {
              if (r.width <= 0 || r.height <= 0) continue;
              if (r.right < 0 || r.left > canvasRect.width) continue; // skip off-screen chars (overflow-hidden text)
              // r.top is the font bounding box top; baseline = r.top + fontBBxAscent
              const baseline = r.top + fontBBxAscent;
              const ink = measureInk(ch, fontShorthand);
              const inkTop    = baseline + ink.top;
              const inkBottom = baseline + ink.bottom;
              const inkHeight = inkBottom - inkTop;
              if (inkHeight <= 0) continue;
              obstacleRects.push({
                x: (r.left  - canvasRect.left) * xScale - obstaclePadding,
                y: (inkTop  - canvasRect.top)  * yScale - obstaclePadding,
                w: r.width  * xScale + obstaclePadding * 2,
                h: inkHeight * yScale + obstaclePadding * 2,
                // All chars on the same CSS line share the same r.top —
                // use it as the per-line grouping key in recomputeLinePlatforms.
                lineTop: Math.round(r.top) * yScale,
              });
            }
          }
        }
      });
      recomputeLinePlatforms();
    }

    // Cat platforms: ONE platform per visible text line.
    // Derived from obstacleRects (which have pixel-accurate ink bounds from measureInk).
    // lineTop = Math.round(r.top) * yScale — all chars on the same CSS line share
    // the same r.top, so this reliably groups by line.
    function recomputeLinePlatforms() {
      catPlatforms = [];
      if (!obstacleSelector || obstacleRects.length === 0) return;

      // Group by line: lineTop is the same for all chars on the same CSS line.
      const lines = new Map(); // Math.round(lineTop) → { yMax, xMin, xMax }
      for (const r of obstacleRects) {
        const key = Math.round(r.lineTop);
        if (lines.has(key)) {
          const g = lines.get(key);
          g.yMax = Math.max(g.yMax, r.y + r.h);
          g.xMin = Math.min(g.xMin, r.x);
          g.xMax = Math.max(g.xMax, r.x + r.w);
        } else {
          lines.set(key, { yMax: r.y + r.h, xMin: r.x, xMax: r.x + r.w });
        }
      }

      for (const g of lines.values()) {
        catPlatforms.push({
          x: g.xMin,
          y: g.yMax + 4, // 4 units below ink bottom compensates for sprite foot padding
          w: g.xMax - g.xMin,
          h: 2,
        });
      }
    }

    fitSize();
    if (typeof ResizeObserver !== 'undefined') {
      new ResizeObserver(fitSize).observe(canvas.parentElement || document.body);
    }
    window.addEventListener('resize', fitSize);
    // Letter positions change after the web font finishes loading
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(recomputeObstacles);
    }
    // Recompute after fade-in animation settles (delay-2: 0.3s + 1.2s = 1.5s)
    // so rects reflect final layout positions rather than the initial translateY.
    setTimeout(recomputeObstacles, 1600);

    // ---------- Game state (per-instance) ----------
    state = {
      cat: {
        x: GRID_W / 2,
        y: GROUND_Y - 12,         // sprite feet land near GROUND_Y
        vx: 0, vy: 0,
        facing: 1,
        mood: 'idle',
        moodTimer: 0,
        bob: 0,
        walkPhase: 0,
        idleTimer: 0,
        anim: 'idle',
        frame: 0,
        frameTimer: 0,
        animComplete: false,
        // Platforming
        onGround: true,
        platform: null,           // letter rect cat is currently standing on
        jumpCooldown: 0,
        // Behavior polish
        landTimer: 0,             // ms remaining to play 'land' anim after a jump
        blinkTimer: 1500 + Math.random() * 4000, // ms until next blink in idle
        blinking: false,
        // Autonomous behavior state — cycles on a random timer so the cat has
        // its own moods between user interactions:
        //   'idle'    — stand around, respond to toys normally
        //   'lazy'    — ignore tossed toys (laser still works), prefer groom
        //   'hunting' — actively pick reachable letters and pounce on them
        // Start in hunting mode but with a long ground huntPause so the cat
        // wanders the viewport floor first (walk, groom, lie, sleep) before
        // starting the first climb cycle — visitors see idle ground behaviors
        // before the cat leaps onto the headline letters.
        behavior: 'hunting',
        behaviorTimer: 25000 + Math.random() * 15000,
        huntTarget: null,         // { platform, x, arrivedAt } or null
        huntPause: 20000 + Math.random() * 15000, // 20–35s ground exploration before first climb
        wanderX: null,            // destination x for idle wander walks
        descending: false,        // true while intentionally stepping off top platform → pass through letter platforms until ground
        // Grooming — fires after batting and occasionally during lazy idle
        groomTimer: 0,
        sneakPhase: false,   // true = slow-stalk approach instead of full-speed chase
        pounceTimer: 0,      // >0 = frozen crouch wind-up before springing at toy
      },
      toy: {
        type: 'yarn',
        x: -100, y: -100,
        vx: 0, vy: 0,
        spinning: 0,
        held: false,
        active: false,
        preview: false,         // ghost toy following the cursor before being dropped
        poofOnLand: false,      // burst dust when this toy hits the ground
        dropping: false,        // skip obstacle collision while falling in from above
        restingPlatform: null,  // word platform the toy is currently sitting on
      },
      pointer: { x: 0, y: 0, down: false, dragStart: null },
      particles: [],
    };

    const GRAVITY  = 0.35;
    const FRICTION = 0.85;
    const BOUNCE   = 0.5;
    const IDLE_TO_LIE_MS   = 5000;
    const IDLE_TO_SLEEP_MS = 10000;

    // ---------- Drawing primitives ----------
    function rect(x, y, w, h, color) {
      ctx.fillStyle = color;
      ctx.fillRect(Math.round(px(x)), Math.round(px(y)), Math.round(px(w)), Math.round(px(h)));
    }

    function drawZ(x, y, color = '#1c1917') {
      rect(x,   y,   3, 1, color);
      rect(x+2, y+1, 1, 1, color);
      rect(x+1, y+2, 1, 1, color);
      rect(x,   y+3, 1, 1, color);
      rect(x,   y+4, 3, 1, color);
    }
    function drawHeart(x, y) {
      rect(x+1, y,   1, 1, '#e07866');
      rect(x+3, y,   1, 1, '#e07866');
      rect(x,   y+1, 5, 2, '#e07866');
      rect(x+1, y+3, 3, 1, '#e07866');
      rect(x+2, y+4, 1, 1, '#e07866');
    }
    function drawQuestion(x, y) {
      rect(x,   y,   3, 1, '#1c1917');
      rect(x+2, y+1, 1, 1, '#1c1917');
      rect(x+1, y+2, 1, 1, '#1c1917');
      rect(x+1, y+4, 1, 1, '#1c1917');
    }

    // ---------- Particles ----------
    function spawnParticle(x, y, type) {
      state.particles.push({
        x, y,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -0.5 - Math.random() * 0.3,
        life: 1500, maxLife: 1500, type,
      });
    }

    // Burst of small dust dots radiating outward — used when a toy lands.
    function spawnPoof(x, y) {
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const speed = 0.7 + Math.random() * 0.5;
        state.particles.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.2,
          life: 400, maxLife: 400,
          type: 'poof',
        });
      }
    }
    function updateParticles(dt) {
      for (const p of state.particles) {
        p.x += p.vx; p.y += p.vy;
        p.vy *= 0.98;
        p.life -= dt;
      }
      state.particles = state.particles.filter(p => p.life > 0);
    }
    function drawParticles() {
      for (const p of state.particles) {
        ctx.globalAlpha = Math.max(0, p.life / p.maxLife);
        if (p.type === 'heart')      drawHeart(Math.round(p.x), Math.round(p.y));
        else if (p.type === 'poof')  rect(Math.round(p.x), Math.round(p.y), 1, 1, '#78716c');
      }
      ctx.globalAlpha = 1;
    }

    function drawMoodIndicator() {
      const c = state.cat;
      const x = Math.round(c.x);
      // Anchor right at the visible top of the cat's head (not sprite frame top —
      // the sprite has ~6–8 px of transparent padding above the figure).
      // Sleep/liedown poses have the cat curled low, so anchor drops down further.
      const isLow = c.anim === 'sleep' || c.anim === 'liedown';
      const headTop = Math.round(c.y) + (isLow ? -6 : -16);
      if (c.mood === 'sleeping') {
        // Three Zs drift up from right at the head.
        // On dark text platforms ("Under" / "for now." = edge indices 0 & 2), the
        // default dark Zzz is invisible — use stone-200 so it reads against the text.
        const sortedP = catPlatforms.slice().sort((a, b) => a.y - b.y);
        const pIdx = c.platform
          ? sortedP.findIndex(sp => Math.abs(sp.y - c.platform.y) <= 3)
          : -1;
        const zColor = (pIdx === 0 || pIdx === 2) ? '#e7e5e4' : '#1c1917';
        const t = performance.now();
        for (let i = 0; i < 3; i++) {
          const phase = ((t / 1400) + i / 3) % 1;
          ctx.globalAlpha = 1 - phase;
          drawZ(
            Math.round(x + i * 2 + Math.sin(phase * Math.PI * 2)),
            Math.round(headTop - 1 - phase * 5),
            zColor,
          );
        }
        ctx.globalAlpha = 1;
      } else if (state.toy.held && c.mood !== 'waking') {
        // Centered question mark hovering right above the head
        drawQuestion(x - 1, headTop - 1);
      }
    }

    // ---------- Petting ----------
    function isClickOnCat(p) {
      const c = state.cat;
      return Math.abs(p.x - c.x) <= 22 && p.y >= c.y - 22 && p.y <= c.y + 22;
    }
    function pet() {
      const c = state.cat;
      const wasResting = c.mood === 'sleeping' || c.mood === 'lying';
      c.idleTimer = 0;
      if (wasResting) { c.mood = 'waking'; c.moodTimer = 400; }
      else            { c.mood = 'happy';  c.moodTimer = 800; }
      // Spawn the heart at the visible head position (matches mood indicator anchor)
      const isLow = c.anim === 'sleep' || c.anim === 'liedown';
      const headY = c.y + (isLow ? -6 : -16);
      spawnParticle(c.x + (Math.random() - 0.5) * 8, headY, 'heart');
    }

    // ---------- Input ----------
    function pointerToGrid(e) {
      const r = canvas.getBoundingClientRect();
      const cx = (e.clientX - r.left) / r.width;
      const cy = (e.clientY - r.top)  / r.height;
      return { x: cx * GRID_W, y: cy * GRID_H };
    }

    canvas.addEventListener('pointerdown', (e) => {
      const p = pointerToGrid(e);
      state.pointer.x = p.x; state.pointer.y = p.y;
      state.pointer.down = true;
      if (isClickOnCat(p)) {
        pet();
        return;
      }
      if (!enableToys) return;
      // Laser is a continuous pointer; clicking the canvas shouldn't spawn a
      // throwable toy on top of it.
      if (state.toy.type === 'laser' && state.toy.active) return;
      // If no toy is currently selected from the picker, canvas clicks do
      // nothing — user has to pick a toy first.
      if (opts.toyPicker) {
        const anySelected = !!document.querySelector(opts.toyPicker + '.active');
        if (!anySelected) return;
      }
      state.pointer.dragStart = { x: p.x, y: p.y, t: performance.now() };
      state.toy.x = p.x; state.toy.y = p.y;
      state.toy.vx = 0; state.toy.vy = 0;
      state.toy.held = true; state.toy.active = true;
      spawnPoof(p.x, p.y);
    });
    canvas.addEventListener('pointermove', (e) => {
      const p = pointerToGrid(e);
      state.pointer.x = p.x; state.pointer.y = p.y;
      if (state.toy.held) { state.toy.x = p.x; state.toy.y = p.y; }
      // Laser tracks the cursor whenever it's the active toy
      if (state.toy.type === 'laser' && state.toy.active) {
        state.toy.x = p.x; state.toy.y = p.y;
      }
    });
    function release(e) {
      if (!state.pointer.down) return;
      state.pointer.down = false;
      if (state.toy.held && state.pointer.dragStart) {
        const dt = Math.max(16, performance.now() - state.pointer.dragStart.t);
        const p = pointerToGrid(e);
        state.toy.vx = (p.x - state.pointer.dragStart.x) / (dt / 80);
        state.toy.vy = (p.y - state.pointer.dragStart.y) / (dt / 80);
      }
      state.toy.held = false;
    }
    canvas.addEventListener('pointerup',     release);
    canvas.addEventListener('pointercancel', release);
    canvas.addEventListener('pointerleave',  release);

    if (opts.toyPicker && enableToys) {
      // Apply active styling inline so we don't depend on CSS specificity
      // battles with Tailwind utility classes.
      const ACTIVE_BG = '#1c1917', ACTIVE_FG = '#fafaf9';
      function setActiveBtn(btn) {
        document.querySelectorAll(opts.toyPicker).forEach(b => {
          b.classList.remove('active');
          b.style.backgroundColor = '';
          b.style.color = '';
          b.style.borderColor = '';
        });
        btn.classList.add('active');
        btn.style.backgroundColor = ACTIVE_BG;
        btn.style.color = ACTIVE_FG;
        btn.style.borderColor = ACTIVE_BG;
      }
      document.querySelectorAll(opts.toyPicker).forEach(btn => {
        btn.addEventListener('click', () => {
          setActiveBtn(btn);
          const type = btn.dataset.toy;
          state.toy.type = type;
          // Hide the cursor while the laser is active — the red dot IS the cursor.
          // Restore default for any other toy (empty string lets the CSS rule win).
          canvas.style.cursor = (type === 'laser') ? 'none' : '';
          if (type === 'laser') {
            // Laser is a continuous pointer — follows the cursor, no physics.
            state.toy.x = state.pointer.x || GRID_W / 2;
            state.toy.y = state.pointer.y || GROUND_Y - 100;
            state.toy.vx = 0; state.toy.vy = 0;
            state.toy.held = false;
            state.toy.active = true;
            state.toy.poofOnLand = false;
            state.toy.dropping = false;
            state.toy.restingPlatform = null;
          } else {
            // Drop the toy in from the top of the playable zone, center of the
            // viewport. Gravity carries it down; spawnPoof fires when it lands so
            // the cat sees an "item arrived" beat across the screen.
            state.toy.x = GRID_W / 2 + (Math.random() - 0.5) * 20;
            state.toy.y = GROUND_Y - 235;
            state.toy.vx = (Math.random() - 0.5) * 0.6;
            state.toy.vy = 0;
            state.toy.held = false;
            state.toy.active = true;
            state.toy.poofOnLand = true;
            state.toy.dropping = true;  // pass through letters while falling in
            state.toy.restingPlatform = null;
          }
        });
      });

      // "Put away" — clears the active toy and any selection state. Only visible
      // while a toy is actually in play; we toggle its display each frame from
      // the game loop based on state.toy.active.
      const clearBtn = document.getElementById('toy-clear');
      if (clearBtn) {
        clearBtn.addEventListener('click', () => {
          state.toy.active = false;
          state.toy.held = false;
          state.toy.preview = false;
          state.toy.x = -100; state.toy.y = -100;
          state.toy.vx = 0; state.toy.vy = 0;
          // Deselect any active toy button
          document.querySelectorAll(opts.toyPicker).forEach(b => {
            b.classList.remove('active');
            b.style.backgroundColor = '';
            b.style.color = '';
            b.style.borderColor = '';
          });
          canvas.style.cursor = '';
        });
      }
    }

    // ---------- Animation system ----------
    function setAnim(name) {
      const c = state.cat;
      if (c.anim === name) return;
      c.anim = name; c.frame = 0; c.frameTimer = 0; c.animComplete = false;
    }
    function advanceAnim(dt) {
      const c = state.cat;
      const anim = ANIMS[c.anim];
      if (!anim) return;
      c.frameTimer += dt;
      const frameDuration = 1000 / anim.fps;
      while (c.frameTimer >= frameDuration) {
        c.frameTimer -= frameDuration;
        if (c.frame < anim.frames - 1) c.frame++;
        else if (anim.loop)            c.frame = 0;
        else { c.animComplete = true; break; }
      }
    }

    // ---------- Cat AI ----------
    // Constants used across the function — hoisted so all blocks can see them
    const MAX_JUMP_REACH = 360;   // cat can leap up this many grid units
    const MAX_JUMP_VX    = 5;     // cap on horizontal jump launch speed

    // Launch the cat from the ground in an arc that lands at (targetX, targetY).
    // Picks the SMALLEST peak that's both tall enough AND has enough airtime
    // for the horizontal distance within MAX_JUMP_VX. For far horizontal
    // targets this means the cat jumps higher than strictly needed (more
    // hangtime to cover the distance) — physically accurate for cat leaps.
    function triggerJump(c, targetX, targetY) {
      const heightNeeded = c.y - targetY;
      const hDist = targetX - c.x;
      const absH  = Math.abs(hDist);
      const h     = heightNeeded + 18; // cat feet land on targetY

      // Helper: airtime to feet-on-target for a given peak
      const airTimeFor = (peak) => {
        const vy0 = Math.sqrt(2 * GRAVITY * peak);
        const disc = vy0 * vy0 - 2 * GRAVITY * h;
        return disc > 0
          ? (vy0 + Math.sqrt(disc)) / GRAVITY
          : (2 * vy0) / GRAVITY;
      };

      // Start at the height-required peak, grow until the horizontal velocity
      // fits within MAX_JUMP_VX (or we hit the ceiling).
      let peak = Math.max(40, heightNeeded + 40);
      while (peak < MAX_JUMP_REACH && absH / airTimeFor(peak) > MAX_JUMP_VX) {
        peak = Math.min(peak + 20, MAX_JUMP_REACH);
      }
      const vy0 = Math.sqrt(2 * GRAVITY * peak);
      const airTime = airTimeFor(peak);

      c.vy = -vy0;
      c.vx = Math.max(-MAX_JUMP_VX, Math.min(MAX_JUMP_VX, hDist / airTime));
      c.facing = c.vx >= 0 ? 1 : -1;
      c.onGround = false;
      c.jumpCooldown = 700;
    }

    function updateCat(dt) {
      const c = state.cat;
      c.bob += dt * 0.004;
      c.moodTimer -= dt;

      const t = state.toy;
      const toyOnScreen = t.active && t.x > -10 && t.x < GRID_W + 10;
      const dx = t.x - c.x;
      const dy = t.y - c.y;
      const distToToy = Math.hypot(dx, dy);

      if (toyOnScreen) c.idleTimer = 0;

      // Behavior cycling — randomly switches between idle / lazy / hunting on a
      // schedule, so the cat varies what it's doing between user inputs.
      // Don't switch away from hunting while the cat is actively engaged in the
      // climb cycle — that would cancel huntPause on ground/platform, causing
      // the cat to skip ground exploration and re-climb immediately. The guard
      // fires any time there's an active huntTarget, an unexpired huntPause
      // (ground or platform), or the cat is descending (airborne but intentionally
      // falling through platforms — c.platform is null while airborne so the old
      // platform-check would leave the descent unprotected).
      const midClimb = c.behavior === 'hunting' &&
                       (c.huntTarget || c.huntPause > 0 || c.descending);
      c.behaviorTimer -= dt;
      if (c.behaviorTimer <= 0 && !midClimb) {
        const r = Math.random();
        c.behavior = r < 0.15 ? 'lazy'
                   : r < 0.35 ? 'idle'
                              : 'hunting';
        c.behaviorTimer = c.behavior === 'hunting'
          ? 25000 + Math.random() * 15000 // hunt for 25–40s (covers full climb+descent)
          : c.behavior === 'lazy'
            ? 4000 + Math.random() * 4000 // lazy 4–8s
            : 4000 + Math.random() * 4000;// idle 4–8s
        c.huntTarget = null;             // reset target on switch
        c.huntPause = 0;
        // Don't clear wanderX or descending while the cat is mid-descent —
        // clearing wanderX cancels the off-edge walk and the cat never reaches
        // the ground. Both are cleared on ground contact instead.
        if (!c.descending) c.wanderX = null;
        c.idleTimer = 0;                 // fresh idle counter after every behavior switch
        // If we just woke up into hunting from a rest pose, kick into 'waking'
        // so the cat sits up before pouncing instead of just running while curled.
        if (c.behavior === 'hunting' && (c.mood === 'sleeping' || c.mood === 'lying')) {
          c.mood = 'waking';
          c.moodTimer = 400;
        }
      }
      // Laser is irresistible — overrides lazy mode (real cats can't help it)
      const userToyActive = toyOnScreen && !t.held;
      // huntActive gates autonomous grooming/idle. Allow grooming in lazy AND idle.
      const huntActive = c.behavior === 'hunting' || t.type === 'laser';

      // Decay any active grooming timer
      if (c.groomTimer > 0) c.groomTimer -= dt;
      if (c.pounceTimer > 0) c.pounceTimer -= dt;

      // ----- Autonomous platform climbing (cat explores each level in order) -----
      // Behaviour: ground → "for now." → "construction," → "Under" → descend.
      // huntPause gives the cat exploration time on each platform without
      // switching behavior modes (avoids the idle-timer-accumulation sleep bug).
      let huntAction = null;
      if (!userToyActive && catPlatforms.length > 0) {
        const groundCatY = GROUND_Y - 12;

        if (c.behavior === 'hunting') {
          // Tick down exploration pause (set after arriving on each platform)
          if (c.huntPause > 0) c.huntPause -= dt;

          if (!c.huntTarget && c.huntPause <= 0) {
            // Next step up = closest platform above current position (highest y < currentY).
            const currentY = c.platform ? c.platform.y : groundCatY;
            const higher = catPlatforms.filter(p =>
              p.y < currentY && (groundCatY - p.y) <= MAX_JUMP_REACH
            );
            if (higher.length > 0) {
              const pick = higher.reduce((best, p) => p.y > best.y ? p : best);
              const targetX = pick.x + 20 + Math.random() * Math.max(0, pick.w - 40);
              if (c.mood === 'sleeping' || c.mood === 'lying') {
                // Wake first. Don't set huntTarget yet — let the cat sit up and
                // collect itself. huntPause extension means the target-pick fires
                // again once the cat is idle, giving a natural wake → sit → walk → jump.
                c.mood = 'waking'; c.moodTimer = 700;
                c.huntPause = 2000 + Math.random() * 1500; // 2–3.5s post-wake pause
              } else {
                c.huntTarget = { platform: pick, x: targetX, arrivedAt: 0 };
              }
            } else if (c.platform && c.wanderX == null) {
              // Already on the highest reachable platform — step off and descend.
              // Only assign wanderX once; without the null-guard it reassigns every
              // 500 ms and the cat oscillates in place instead of walking off.
              // Set descending=true so the cat falls through intermediate platforms
              // all the way to the ground instead of re-climbing from each level.
              if (c.huntPause <= 0) {
                if (c.mood === 'sleeping' || c.mood === 'lying') {
                  // Wake first. wanderX stays null so the descent path re-fires once
                  // the cat is idle — gives the natural sit-up → walk → step-off sequence.
                  c.mood = 'waking'; c.moodTimer = 700;
                  c.huntPause = 2000 + Math.random() * 1500;
                  c.idleTimer = 0;
                } else {
                  const p = c.platform;
                  const exitDir = Math.random() > 0.5 ? 1 : -1;
                  c.wanderX = exitDir > 0
                    ? Math.min(p.x + p.w + 80 + Math.random() * 150, GRID_W - 20)
                    : Math.max(p.x - 80 - Math.random() * 150, 20);
                  c.huntPause = 600;
                  c.descending = true;
                }
              }
            }
          }

          if (c.huntTarget) {
            const tgt = c.huntTarget;
            if (c.platform) {
              // Use y-proximity instead of object identity — avoids stale
              // reference bugs when recomputeObstacles() rebuilds catPlatforms.
              const onTargetPlatform = Math.abs(c.platform.y - tgt.platform.y) <= 3;
              if (!onTargetPlatform) {
                if (tgt.platform.y < c.platform.y) {
                  huntAction = 'approaching'; // target still higher, keep climbing
                } else {
                  c.huntTarget = null; // landed lower than expected, re-target
                }
              } else if (tgt.arrivedAt === 0) {
                tgt.arrivedAt = performance.now();
                huntAction = 'arrived';
              } else {
                huntAction = 'arrived';
              }
              if (huntAction === 'arrived' && c.huntTarget && c.huntTarget.arrivedAt > 0 &&
                  performance.now() - c.huntTarget.arrivedAt > 600 + Math.random() * 800) {
                // Landed — explore this level before climbing further
                c.huntTarget = null;
                const p = c.platform;
                c.wanderX = p.x + 10 + Math.random() * Math.max(0, p.w - 20);
                c.idleTimer = 0; // fresh idle so groom/lie can fire from this arrival
                // "construction," (middle platform, gray text) gets a long stay so the
                // cat can actually lie and sleep there. "Under" and "for now." (dark text,
                // invisible Zzz) get a short stay that naturally prevents sleeping.
                const sortedForPause = catPlatforms.slice().sort((a, b) => a.y - b.y);
                const pIdxArrival = sortedForPause.findIndex(sp => Math.abs(sp.y - p.y) <= 3);
                c.huntPause = pIdxArrival === 1
                  ? 12000 + Math.random() * 8000  // 12–20s on construction, — allows lie + sleep
                  : 3000 + Math.random() * 3000;  // 3–6s on Under/for now. — too short to sleep
              }
            } else {
              huntAction = 'approaching';
            }
          }
        }
      }

      // While the cat is autonomously hunting, keep idleTimer pinned to 0 so
      // it can't wander off into the lying/sleeping state mid-hunt.
      if (huntAction) c.idleTimer = 0;

      // User-thrown toys ALWAYS engage the cat (real cats can't ignore a tossed
      // toy in front of them). Lazy mode only affects autonomous behavior, not
      // the cat's response to user interaction.
      const isResting = c.mood === 'sleeping' || c.mood === 'lying';
      if (isResting && toyOnScreen && !t.held) {
        c.mood = 'waking'; c.moodTimer = 400;
      }

      if (c.mood === 'waking' || c.mood === 'happy') {
        if (c.moodTimer <= 0) c.mood = 'idle';
      } else if (toyOnScreen && !t.held && distToToy < 22) {
        if (c.mood !== 'batting') {
          c.mood = 'batting'; c.moodTimer = 600;
          // Physical toys get knocked away. Laser dot can't be batted — it just
          // keeps following the cursor, so the cat plays the attack anim
          // pointlessly (very accurate to real cats with laser pointers).
          if (t.type !== 'laser') {
            t.vx = (t.x - c.x) * 0.25 + Math.sign(t.x - c.x || (Math.random() - 0.5)) * 4;
            t.vy = -4 - Math.random() * 2;
            // Schedule a grooming pass after the bat completes (post-play wash)
            c.groomTimer = 600 + 2500 + Math.random() * 1500; // ~3-4s after bat
          }
        }
      } else if (toyOnScreen && !t.held) {
        if (c.mood !== 'chasing') {
          // New chase begins — 40% chance of slow-stalk approach
          c.sneakPhase = Math.random() < 0.4;
          c.pounceTimer = 0;
        }
        c.mood = 'chasing';
      } else if (c.moodTimer <= 0) {
        c.sneakPhase = false;
        c.pounceTimer = 0;
        c.idleTimer += dt;
        // Allow grooming during idle AND during hunting's huntPause (no active target).
        // This gives the cat natural chill moments on platforms mid-climb.
        const canGroom = !huntActive || (c.behavior === 'hunting' && !c.huntTarget);
        if (canGroom && c.idleTimer > 1500 && c.groomTimer <= 0 && Math.random() < 0.003) {
          c.groomTimer = 3000 + Math.random() * 3000; // groom for 3-6s
        }
        if (c.idleTimer >= IDLE_TO_SLEEP_MS)    c.mood = 'sleeping';
        else if (c.idleTimer >= IDLE_TO_LIE_MS) c.mood = 'lying';
        else                                    c.mood = 'idle';
      }

      // Reachability — used both to skip pointless jumps and to switch the
      // cat into a "watch from below" stance instead of dog-bouncing in place.
      // (MAX_JUMP_REACH is hoisted above the function so the autonomous-hunt
      // block earlier in updateCat can also reference it.)
      const heightNeeded   = toyOnScreen ? (c.y - t.y) : 0;
      const toyUnreachable = toyOnScreen && heightNeeded > MAX_JUMP_REACH;
      const watchingFromBelow = toyUnreachable && Math.abs(t.x - c.x) < 24;

      const prevX = c.x;
      // Movement only when on the ground — preserves jump arcs (otherwise
      // chase/hunt would recompute vx every frame and kill the launched velocity).
      if (c.onGround) {
        if (c.mood === 'chasing' && toyOnScreen && !watchingFromBelow) {
          const toyBelow = c.platform && t.y > c.platform.y;
          if (toyBelow) {
            // Toy is below a letter platform — walk to the nearest edge and drop
            // down. Using dx would cause oscillation when toy is directly below
            // (dx ≈ 0 flips sign each frame). Nearest-edge is stable and fast.
            const p = c.platform;
            const dir = c.x < p.x + p.w / 2 ? -1 : 1;
            c.vx = dir * 1.3;
            c.pounceTimer = 0; // cancel any wind-up freeze while above the toy
          } else if (c.pounceTimer > 0) {
            // Frozen crouch wind-up on the ground — slow to a stop before springing
            c.vx *= 0.7;
          } else {
            const speed = c.sneakPhase ? 0.55 : (toyUnreachable ? 1.0 : 1.6);
            c.vx = Math.sign(dx) * Math.min(Math.abs(dx) * 0.08, speed);
            // Only trigger pounce when already on the ground (no platform),
            // so the cat never freeze-crouches while hovering above the toy.
            if (c.sneakPhase && Math.abs(dx) < 45 && !c.platform) {
              c.sneakPhase = false;
              c.pounceTimer = 350;
            }
          }
          c.facing = dx > 0 ? 1 : -1;
          c.walkPhase += dt * 0.012;
        } else if (huntAction === 'approaching') {
          const tdx = c.huntTarget.x - c.x;
          const speed = 1.4;
          c.vx = Math.sign(tdx) * Math.min(Math.abs(tdx) * 0.08, speed);
          c.facing = tdx > 0 ? 1 : -1;
          c.walkPhase += dt * 0.012;
        } else {
          // Idle wander — pick a destination and actually walk there.
          // Higher pick rate on ground during a huntPause so the cat actively
          // roams between rests rather than standing in one spot.
          const isResting = c.mood === 'sleeping' || c.mood === 'lying';
          if (!isResting && c.mood !== 'waking') {
            const groundExploring = !c.platform && c.behavior === 'hunting' && c.huntPause > 0;
            const wanderChance = groundExploring ? 0.012 : 0.003;
            if (c.wanderX == null && Math.random() < wanderChance) {
              if (c.platform) {
                // Stay within the platform so the cat doesn't accidentally walk off
                const p = c.platform;
                c.wanderX = p.x + 10 + Math.random() * Math.max(0, p.w - 20);
              } else if (groundExploring) {
                // During ground exploration strongly bias toward cross-viewport walks
                // so visitors see the cat cover the full width of the screen.
                // 55% → opposite side (if on left half go right, and vice versa)
                // 25% → random far edge
                // 20% → random anywhere
                const r2 = Math.random();
                if (r2 < 0.55) {
                  // Walk to the opposite half of the viewport
                  c.wanderX = c.x < GRID_W / 2
                    ? GRID_W - 20 - Math.random() * (GRID_W * 0.3)  // right side
                    : 20 + Math.random() * (GRID_W * 0.3);           // left side
                } else if (r2 < 0.80) {
                  // Hard edge — all the way left or right
                  c.wanderX = Math.random() < 0.5
                    ? 10 + Math.random() * 30
                    : GRID_W - 40 + Math.random() * 30;
                } else {
                  c.wanderX = 30 + Math.random() * (GRID_W - 60);
                }
                // Reset the idle timer on each new ground destination so lie/sleep
                // thresholds restart from this location rather than accumulating
                // across the whole exploration phase.
                c.idleTimer = 0;
              } else {
                c.wanderX = 30 + Math.random() * (GRID_W - 60);
              }
            }
            if (c.wanderX != null) {
              const wdx = c.wanderX - c.x;
              if (Math.abs(wdx) < 4) {
                c.wanderX = null;
                c.vx *= 0.5;
              } else {
                c.vx = Math.sign(wdx) * 1.3;
                c.facing = Math.sign(wdx);
              }
            } else {
              c.vx *= 0.88;
            }
          } else {
            c.vx *= 0.88;
          }
          c.walkPhase += dt * Math.abs(c.vx) * 0.01;
        }
      }
      // Airborne: vx persists from triggerJump (no air control)
      c.x += c.vx;
      c.x = Math.max(20, Math.min(GRID_W - 20, c.x));
      const actuallyMoving = Math.abs(c.x - prevX) > 0.1;

      // ---------- Vertical physics (jumping + landing on letters) ----------
      const groundCatY = GROUND_Y - 12;
      const prevY = c.y;
      c.jumpCooldown -= dt;

      // Apply gravity when airborne
      if (!c.onGround) {
        c.vy += GRAVITY;
        c.y += c.vy;
      }

      // Track previous airborne state so we can trigger the `land` anim when
      // the cat actually touches down (vs just being on ground frame-to-frame).
      const wasAirborne = !c.onGround;

      // Land on the ground
      if (c.y >= groundCatY) {
        c.y = groundCatY;
        c.vy = 0;
        c.onGround = true;
        c.platform = null;
        c.descending = false;
        c.wanderX = null; // clear descent wanderX so ground explore picks a fresh one
      }

      // Land on top of a line platform (cap-height TOP or BASELINE rail of a
      // text line). Wide rects → cat always sits cleanly. No more landing
      // inside hollow letters or floating on tiny periods.
      // Skip while descending so the cat falls straight to the ground.
      if (!c.onGround && c.vy >= 0 && !c.descending) {
        const catFeetPrev = prevY + 18;
        const catFeet     = c.y + 18;
        const catLeft  = c.x - 8;
        const catRight = c.x + 8;
        for (const p of catPlatforms) {
          const crossed = catFeetPrev <= p.y + 1 && catFeet >= p.y - 1;
          if (crossed && catRight > p.x && catLeft < p.x + p.w) {
            c.y = p.y - 18;
            c.vy = 0;
            c.vx = 0;   // cats don't slide on landing
            c.onGround = true;
            c.platform = p;
            break;
          }
        }
      }

      // Just touched down? Play the `land` pose for ~200ms before resuming
      if (wasAirborne && c.onGround) {
        c.landTimer = 200;
        if (c.platform) {
          c.idleTimer = 0; // fresh idle on each new platform landing
          // Always pause before hunting from a newly landed platform, even
          // if the landing was unplanned (e.g. drifted off edge during idle).
          if (c.behavior === 'hunting' && c.huntPause <= 0) {
            c.huntPause = 2000 + Math.random() * 2000;
          }
        } else if (c.behavior === 'hunting') {
          // Ground exploration phase — cat wanders the viewport floor, possibly
          // grooms / lies / sleeps before starting the next climb. 15–30s gives
          // the idle thresholds (lie: 5s, sleep: 10s) room to fire naturally
          // and matches the initial ground phase so each cycle feels consistent.
          c.huntPause = 15000 + Math.random() * 15000;
          c.idleTimer = 0; // fresh idle so lie/sleep timers start from landing
          // First wander goes to the far side of the viewport so visitors immediately
          // see a long cross-screen walk rather than idle shuffling in one spot.
          c.wanderX = c.x < GRID_W / 2
            ? GRID_W - 20 - Math.random() * (GRID_W * 0.25)
            : 20 + Math.random() * (GRID_W * 0.25);
        }
      }
      if (c.landTimer > 0) c.landTimer -= dt;

      // If standing on a letter and we walk past either edge, fall off.
      if (c.platform) {
        const o = c.platform;
        if (c.x + 8 < o.x || c.x - 8 > o.x + o.w) {
          c.platform = null;
          c.onGround = false;
          // vy stays 0 — gravity will start pulling next frame
        }
      }

      // Trigger a jump when chasing a reachable high toy (only from the ground)
      if (c.mood === 'chasing' && c.onGround && c.jumpCooldown <= 0 && toyOnScreen && !t.held) {
        const toyAbove = heightNeeded > 30;
        const toyClose = Math.abs(t.x - c.x) < 140;
        // Don't bother jumping if we know we can't reach — cats observe and wait
        if (toyAbove && toyClose && !toyUnreachable) {
          triggerJump(c, t.x, t.y);
        }
      }

      // Autonomous hunt: when approaching a picked target letter and we're
      // close enough horizontally, leap up onto it (arcing through the air).
      if (huntAction === 'approaching' && c.onGround && c.jumpCooldown <= 0) {
        const tgt = c.huntTarget;
        const tdx = Math.abs(tgt.x - c.x);
        const tHeightNeeded = c.y - tgt.platform.y;
        // Jump when within 100 units of the exact target, OR when already
        // standing anywhere within the target platform's x span (prevents the
        // cat from walking off its current platform chasing a far target point).
        const underTarget = c.x >= tgt.platform.x && c.x <= tgt.platform.x + tgt.platform.w;
        if ((tdx < 100 || underTarget) && tHeightNeeded > 20) {
          triggerJump(c, tgt.x, tgt.platform.y);
        }
      }

      let target;
      // Autonomous hunting overrides idle behavior — cat is actively going
      // for its picked letter target, not just standing around.
      if (huntAction) {
        if (!c.onGround)              target = 'jump';
        else if (c.landTimer > 0)     target = 'land';
        else if (huntAction === 'arrived') target = 'sit';   // proudly perched
        else if (actuallyMoving)      target = 'run';        // running to target
        else                          target = 'idle';
      } else switch (c.mood) {
        case 'chasing':
          if (!c.onGround)            target = 'jump';
          else if (c.landTimer > 0)   target = 'land';
          else if (c.pounceTimer > 0) target = 'crouch'; // frozen wind-up
          else if (watchingFromBelow) target = 'crouch'; // coiled-spring watch
          else if (c.sneakPhase)      target = 'sneak';  // slow stalk
          else if (toyUnreachable && actuallyMoving) target = 'sneak';
          else if (actuallyMoving)    target = 'run';
          else                        target = 'idle';
          break;
        case 'batting':  target = 'attack';  break;
        case 'lying':    target = 'liedown'; break;
        case 'sleeping': target = 'sleep';   break;
        case 'waking':   target = 'sit';     break;
        case 'happy':    target = 'sit';     break;
        default:         target = !c.onGround ? 'jump' : (actuallyMoving ? 'walk' : 'idle'); break;
      }

      // Grooming pass overrides idle/sit when the timer is active. This fires
      // after a bat (post-play wash) and randomly during lazy idle.
      if (c.groomTimer > 0 && c.onGround && (target === 'idle' || target === 'sit')) {
        target = 'groom';
      }

      // Idle blink — every few seconds during plain idle, swap in the blink
      // animation for one cycle. Adds subtle life when the cat is just standing.
      if (target === 'idle') {
        c.blinkTimer -= dt;
        if (c.blinking && c.animComplete) {
          c.blinking = false;
          c.blinkTimer = 2500 + Math.random() * 4000; // 2.5–6.5s until next blink
        }
        if (!c.blinking && c.blinkTimer <= 0) {
          c.blinking = true;
        }
        if (c.blinking) target = 'blink';
      } else {
        c.blinking = false;
      }

      setAnim(target);
      advanceAnim(dt);
    }

    // ---------- Toy physics ----------
    function updateToy(dt) {
      const t = state.toy;
      if (!t.active || t.held) return;
      // Laser pointer has no physics — its position is set by pointermove
      if (t.type === 'laser') return;
      const prevX = t.x, prevY = t.y;
      t.vy += GRAVITY;
      t.x += t.vx; t.y += t.vy;
      t.spinning += t.vx * 0.06;
      // Hard ceiling at the top of the canvas only — toys can fly anywhere up
      // to "Under" since the cat now handles unreachable prey (stalk + crouch
       // + watch from below). Without this they'd float off-screen.
      if (t.y < 4) {
        t.y = 4;
        if (t.vy < 0) t.vy = Math.abs(t.vy) * BOUNCE;
      }
      const TR = 4; // toy "radius" in grid units

      // One-way word platforms: toy passes up through from below, lands on top
      // when falling (same mechanic as the cat). Skip while dropping in from above.
      if (!t.dropping && t.vy > 0) {
        for (const p of catPlatforms) {
          if (prevY <= p.y && t.y >= p.y &&
              t.x + TR > p.x && t.x - TR < p.x + p.w) {
            t.y = p.y;
            t.vy *= -BOUNCE; t.vx *= FRICTION;
            if (Math.abs(t.vy) < 0.6) t.vy = 0;
            if (Math.abs(t.vx) < 0.1) t.vx = 0;
            if (t.poofOnLand) { spawnPoof(t.x, p.y); t.poofOnLand = false; }
            t.restingPlatform = p;
            break;
          }
        }
      }

      // Floor
      if (t.y > GROUND_Y) {
        t.y = GROUND_Y;
        t.vy *= -BOUNCE; t.vx *= FRICTION;
        if (Math.abs(t.vy) < 0.6) t.vy = 0;
        if (Math.abs(t.vx) < 0.1) t.vx = 0;
        // First-time landing burst (drop-in animation)
        if (t.poofOnLand) {
          spawnPoof(t.x, GROUND_Y);
          t.poofOnLand = false;
        }
        t.dropping = false;
        t.restingPlatform = null;
      }
      // Walls
      if (t.x < 4)          { t.x = 4;          t.vx *= -BOUNCE; }
      if (t.x > GRID_W - 4) { t.x = GRID_W - 4; t.vx *= -BOUNCE; }
    }

    // ---------- Drawing ----------
    function drawScene() {
      if (showBg) {
        rect(0, 0, GRID_W, GRID_H, '#fafaf9');
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      if (showGround) {
        rect(0, GROUND_Y + 8, GRID_W, GRID_H - GROUND_Y - 8, '#e7e5e4');
        rect(0, GROUND_Y + 8, GRID_W, 1, '#d6d3d1');
        for (let i = 0; i < 24; i++) {
          const dxi = (i * 41) % GRID_W;
          rect(dxi, GROUND_Y + 12 + (i % 3) * 4, 1, 1, '#d6d3d1');
        }
      }
    }

    function drawCat() {
      const c = state.cat;
      const anim = ANIMS[c.anim];
      if (!anim || !anim.img.complete || !anim.img.naturalWidth) return;

      const shadowW = (c.mood === 'lying' || c.mood === 'sleeping') ? 22 : 28;
      // Shadow lives on whatever surface the cat is standing on (a letter
      // platform or the ground). When airborne, draw it on the ground below
      // so the player can see where the cat will land.
      const shadowY = c.platform ? c.platform.y + 1 : GROUND_Y + 7;
      rect(Math.round(c.x) - shadowW / 2, shadowY, shadowW, 1, '#d6d3d1');

      const sx = c.frame * FRAME_W;
      const drawX = Math.round(c.x) - FRAME_W / 2;
      const drawY = Math.round(c.y) + 18 - FRAME_H;

      // Remap dark-charcoal sprite to warm light-gray (stone-200 palette).
      // brightness(3) pushes the body pixels toward white; saturate(0) strips
      // any colour cast; contrast(1.3) sharpens the remaining outline pixels
      // so the cat stays readable on the pale stone-50 background.
      ctx.imageSmoothingEnabled = false;
      ctx.filter = 'brightness(3) saturate(0) contrast(1.3)';
      if (anim.side && c.facing === -1) {
        ctx.save();
        ctx.translate(px(Math.round(c.x) + FRAME_W / 2), px(drawY));
        ctx.scale(-1, 1);
        ctx.drawImage(anim.img, sx, 0, FRAME_W, FRAME_H, 0, 0, px(FRAME_W), px(FRAME_H));
        ctx.restore();
      } else {
        ctx.drawImage(anim.img, sx, 0, FRAME_W, FRAME_H, px(drawX), px(drawY), px(FRAME_W), px(FRAME_H));
      }
      ctx.filter = 'none';
    }

    function drawToy() {
      const t = state.toy;
      if (!t.active && !t.held) return;
      const x = Math.round(t.x);
      const y = Math.round(t.y);
      // Laser — just a small glowing red dot at the cursor, no shadow
      if (t.type === 'laser') {
        drawLaser(x, y);
        return;
      }
      if (!t.held) {
        const shadowFloor = t.restingPlatform ? t.restingPlatform.y + 1 : GROUND_Y + 7;
        const a = Math.max(0, 1 - (shadowFloor - y) / 80);
        ctx.fillStyle = `rgba(120,113,108,${0.4 * a})`;
        ctx.fillRect(Math.round(px(x - 4)), Math.round(px(shadowFloor)), Math.round(px(8)), Math.round(px(1)));
      }
      switch (t.type) {
        case 'yarn':    drawYarn(x, y, t.spinning); break;
        case 'mouse':   drawMouse(x, y, t.vx);      break;
        case 'feather': drawFeather(x, y, t.spinning); break;
        case 'fish':    drawFish(x, y, t.vx);       break;
      }
    }

    function drawLaser(x, y) {
      // Outer soft glow
      ctx.fillStyle = 'rgba(220, 38, 38, 0.22)';
      ctx.fillRect(Math.round(px(x - 3)), Math.round(px(y - 3)), Math.round(px(7)), Math.round(px(7)));
      // Inner glow
      ctx.fillStyle = 'rgba(220, 38, 38, 0.5)';
      ctx.fillRect(Math.round(px(x - 2)), Math.round(px(y - 2)), Math.round(px(5)), Math.round(px(5)));
      // Bright core dot
      ctx.fillStyle = '#dc2626';
      ctx.fillRect(Math.round(px(x - 1)), Math.round(px(y - 1)), Math.round(px(2)), Math.round(px(2)));
    }

    function drawYarn(x, y, spin) {
      rect(x - 4, y - 4, 8, 8, '#b24d37');
      rect(x - 3, y - 3, 6, 6, '#c8634d');
      const s = Math.floor(spin) % 4;
      if (s === 0) rect(x - 4, y - 1, 8, 1, '#7a3525');
      if (s === 1) rect(x - 3, y - 3, 1, 6, '#7a3525');
      if (s === 2) rect(x - 4, y + 1, 8, 1, '#7a3525');
      if (s === 3) rect(x + 2, y - 3, 1, 6, '#7a3525');
      rect(x + 4, y, 4, 1, '#b24d37');
    }
    function drawMouse(x, y, vx) {
      const f = vx >= 0 ? 1 : -1;
      rect(x - 4, y - 2, 8, 5, '#78716c');
      rect(x - 6 * f - (f === -1 ? -1 : 0), y - 2, 3, 4, '#78716c');
      rect(x - 5 * f - (f === -1 ? -1 : 0), y - 4, 2, 2, '#78716c');
      rect(x - 5 * f - (f === -1 ? -1 : 0), y - 1, 1, 1, '#1c1917');
      rect(x + 3 * f, y, 3, 1, '#78716c');
    }
    function drawFeather(x, y, spin) {
      const ang = Math.sin(spin * 0.3) * 4;
      rect(x, y - 6 + ang, 1, 12, '#44403c');
      rect(x - 3, y - 5 + ang, 3, 1, '#a8a29e');
      rect(x - 4, y - 3 + ang, 4, 1, '#a8a29e');
      rect(x - 5, y - 1 + ang, 5, 1, '#a8a29e');
      rect(x + 1, y - 5 + ang, 3, 1, '#a8a29e');
      rect(x + 1, y - 3 + ang, 4, 1, '#a8a29e');
      rect(x + 1, y - 1 + ang, 5, 1, '#a8a29e');
    }
    function drawFish(x, y, vx) {
      const f = vx >= 0 ? 1 : -1;
      rect(x - 4, y - 2, 8, 4, '#e08c3a');
      rect(x - 3, y - 3, 6, 6, '#e08c3a');
      rect(x - 3 * f - (f === -1 ? -1 : 0), y - 1, 1, 1, '#1c1917');
      rect(x + 4 * f, y - 3, 1, 6, '#e08c3a');
      rect(x + 5 * f, y - 4, 1, 8, '#e08c3a');
    }

    // ---------- Game loop ----------
    const _clearBtn = document.getElementById('toy-clear');
    let _clearBtnVisible = false;
    let last = performance.now();
    function loop(now) {
      const dt = Math.min(40, now - last);
      last = now;
      if (!document.hidden) {
        updateCat(dt);
        if (enableToys) updateToy(dt);
        updateParticles(dt);
      }
      drawScene();
      if (enableToys) drawToy();
      drawCat();
      drawMoodIndicator();
      drawParticles();
      // Show "Put away" only while a toy is in use
      if (_clearBtn) {
        const shouldShow = state.toy.active || state.toy.held;
        if (shouldShow !== _clearBtnVisible) {
          _clearBtn.style.display = shouldShow ? '' : 'none';
          _clearBtnVisible = shouldShow;
        }
      }
      requestAnimationFrame(loop);
    }
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) last = performance.now();
    });
    requestAnimationFrame(loop);
  }

  window.CatGame = { init };
})();
