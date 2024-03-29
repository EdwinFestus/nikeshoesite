import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"


const CustomerReviews = () => {
  return (
    <section className="max-container ">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="font-montserrat text-xl m-auto max-w-lg text-center mt-5 info-text ">Hear genuine stories from our satisfied customerss about their exceptional experiences with us.</p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
          {reviews.map((review, index) => (
            <ReviewCard 
              key={review.customerName}
              imgURL={review.imgURL}
              customerName = {review.customerName}
              rating = {review.rating}
              feedback = {review.feedback}
            />
          ))}
      </div>
    </section>
  )
}

export default CustomerReviews