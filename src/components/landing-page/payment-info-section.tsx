
const PaymentInfoSection: React.FC = () => {
  return (
    <section
      className="w-full py-6 md:py-8"
      style={{
        background: 'linear-gradient(0.56deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 80%), #66DB62',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Columna 1 */}
          <div className="text-center">
            <p className="font-kumbh-sans font-bold text-xl leading-none tracking-normal text-foreground">
              Todos los planes se pagan 50% al inicio y 50% al entregar
            </p>
          </div>

          {/* Columna 2 */}
          <div className="text-center">
            <p className="font-kumbh-sans text-xl leading-none tracking-normal text-foreground">
              <strong className="font-bold">Soporte opcional posterior disponible.</strong>
              {' '}
              <span className="font-normal">** Webs en Español e Inglés (opcional)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PaymentInfoSection;
