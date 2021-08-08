import { Observable, of } from 'rxjs';
/*
// Using the of() method

of('Alice', 'Ben', 'Charlie').subscribe({
  next: value => console.log(value),
  complete: () => console.log('All done!')
});
*/

/*

// Creating individual obsevables to mimic of()
const names$ = new Observable<string>(subscriber => {
  subscriber.next('Alice');
  subscriber.next('Ben');
  subscriber.next('Charlie');
  subscriber.complete('Done!');
});

names$.subscribe({
  next: value => console.log(value),
  complete: () => console.log('Done!')
});
*/

// creating our own of() to understand how rxjs makes of() work

ourOwnOf('Alice', 'Ben', 'Charlie').subscribe({
  next: value => console.log(value),
  complete: () => console.log('Finished!')
});

function ourOwnOf(...args: string[]): Observable<string> {
  return new Observable<string>(subscriber => {
    for (let i = 0; i < args.length; i++) {
      subscriber.next(args[i]);
    }
    subscriber.complete();
  });
}
